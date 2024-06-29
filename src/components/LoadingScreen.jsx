'use client';

import { useEffect } from 'react';
import { TweenMax } from 'gsap';
import _ from 'lodash';

const randomInRange = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const BASE_SIZE = 1;
const VELOCITY_INC = 1.01;
const VELOCITY_INIT_INC = 1.025;
const JUMP_VELOCITY_INC = 1.25;
const JUMP_SIZE_INC = 1.15;
const SIZE_INC = 1.01;
const RAD = Math.PI / 180;
const WARP_COLORS = [
    [197, 239, 247],
    [25, 181, 254],
    [77, 5, 232],
    [165, 55, 253],
    [255, 255, 255],
];

class Star {
    STATE = {
        alpha: Math.random(),
        angle: randomInRange(0, 360) * RAD,
    };

    reset = () => {
        const angle = randomInRange(0, 360) * RAD;
        const vX = Math.cos(angle);
        const vY = Math.sin(angle);
        const travelled =
            Math.random() > 0.5
                ? Math.random() * Math.max(window.innerWidth, window.innerHeight) + Math.random() * (window.innerWidth * 0.24)
                : Math.random() * (window.innerWidth * 0.25);
        this.STATE = {
            ...this.STATE,
            iX: undefined,
            iY: undefined,
            active: travelled ? true : false,
            x: Math.floor(vX * travelled) + window.innerWidth / 2,
            vX,
            y: Math.floor(vY * travelled) + window.innerHeight / 2,
            vY,
            size: BASE_SIZE,
        };
    };

    constructor() {
        this.reset();
    }
}

const generateStarPool = (size) => new Array(size).fill().map(() => new Star());

const LoadingScreen = () => {
    useEffect(() => {
        const STATE = {
            stars: generateStarPool(300),
            bgAlpha: 0,
            sizeInc: SIZE_INC,
            velocity: VELOCITY_INC,
        };

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const render = () => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            if (STATE.bgAlpha > 0) {
                context.fillStyle = `rgba(31, 58, 157, ${STATE.bgAlpha})`;
                context.fillRect(0, 0, window.innerWidth, window.innerHeight);
            }

            const nonActive = STATE.stars.filter((s) => !s.STATE.active);
            if (!STATE.initiating && nonActive.length > 0) {
                nonActive[0].STATE.active = true;
            }

            for (const star of STATE.stars.filter((s) => s.STATE.active)) {
                const {
                    active,
                    x,
                    y,
                    iX,
                    iY,
                    iVX,
                    iVY,
                    size,
                    vX,
                    vY,
                } = star.STATE;

                if (
                    ((iX || x) < 0 ||
                        (iX || x) > window.innerWidth ||
                        (iY || y) < 0 ||
                        (iY || y) > window.innerHeight) &&
                    active &&
                    !STATE.initiating
                ) {
                    star.reset(true);
                } else if (active) {
                    const newIX = STATE.initiating ? iX : iX + iVX;
                    const newIY = STATE.initiating ? iY : iY + iVY;
                    const newX = x + vX;
                    const newY = y + vY;

                    const caught =
                        (vX < 0 && newIX < x) ||
                        (vX > 0 && newIX > x) ||
                        (vY < 0 && newIY < y) ||
                        (vY > 0 && newIY > y);

                    star.STATE = {
                        ...star.STATE,
                        iX: caught ? undefined : newIX,
                        iY: caught ? undefined : newIY,
                        iVX: caught ? undefined : iVX * VELOCITY_INIT_INC,
                        iVY: caught ? undefined : iVY * VELOCITY_INIT_INC,
                        x: newX,
                        vX: star.STATE.vX * STATE.velocity,
                        y: newY,
                        vY: star.STATE.vY * STATE.velocity,
                        size: STATE.initiating
                            ? size
                            : size * (iX || iY ? SIZE_INC : STATE.sizeInc),
                    };

                    let color = `rgba(255, 255, 255, ${star.STATE.alpha})`;
                    if (STATE.jumping) {
                        const [
                            r,
                            g,
                            b,
                        ] = WARP_COLORS[randomInRange(0, WARP_COLORS.length)];
                        color = `rgba(${r}, ${g}, ${b}, ${star.STATE.alpha})`;
                    }

                    context.strokeStyle = color;
                    context.lineWidth = size;
                    context.beginPath();
                    context.moveTo(star.STATE.iX || x, star.STATE.iY || y);
                    context.lineTo(star.STATE.x, star.STATE.y);
                    context.stroke();
                }
            }

            requestAnimationFrame(render);
        };

        const initiate = () => {
            if (STATE.jumping || STATE.initiating) return;

            STATE.initiating = true;
            STATE.initiateTimestamp = new Date().getTime();

            TweenMax.to(STATE, 0.25, {
                velocity: VELOCITY_INIT_INC,
                bgAlpha: 0.3,
            });

            for (const star of STATE.stars.filter((s) => s.STATE.active)) {
                star.STATE = {
                    ...star.STATE,
                    iX: star.STATE.x,
                    iY: star.STATE.y,
                    iVX: star.STATE.vX,
                    iVY: star.STATE.vY,
                };
            }
        };

        const jump = () => {
            STATE.bgAlpha = 0;
            STATE.jumping = true;

            TweenMax.to(STATE, 0.25, {
                velocity: JUMP_VELOCITY_INC,
                bgAlpha: 0.75,
                sizeInc: JUMP_SIZE_INC,
            });

            setTimeout(() => {
                STATE.jumping = false;
                TweenMax.to(STATE, 0.25, {
                    bgAlpha: 0,
                    velocity: VELOCITY_INC,
                    sizeInc: SIZE_INC,
                });
            }, 2500);
        };

        const enter = () => {
            if (STATE.jumping) return;

            const { initiateTimestamp } = STATE;
            STATE.initiating = false;
            STATE.initiateTimestamp = undefined;

            if (new Date().getTime() - initiateTimestamp > 600) {
                jump();
            } else {
                TweenMax.to(STATE, 0.25, { velocity: VELOCITY_INC, bgAlpha: 0 });
            }
        };

        const bind = () => {
            canvas.addEventListener('mousedown', initiate);
            canvas.addEventListener('touchstart', initiate);
            canvas.addEventListener('mouseup', enter);
            canvas.addEventListener('touchend', enter);
        };

        const setup = () => {
            context.lineCap = 'round';
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.style.position = 'fixed';
            canvas.style.top = 0;
            canvas.style.left = 0;
            canvas.style.zIndex = 1;
        };

        const reset = () => {
            STATE.stars = generateStarPool(300);
            setup();
        };

        setup();
        document.body.appendChild(canvas);
        bind();
        render();

        window.addEventListener(
            'resize',
            _.debounce(() => {
                reset();
            }, 250)
        );

        return () => {
            window.removeEventListener('resize', reset);
            canvas.removeEventListener('mousedown', initiate);
            canvas.removeEventListener('touchstart', initiate);
            canvas.removeEventListener('mouseup', enter);
            canvas.removeEventListener('touchend', enter);
        };
    }, []);

    return null;
};

export default LoadingScreen;
