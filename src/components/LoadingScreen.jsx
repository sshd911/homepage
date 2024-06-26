// 'use client';

// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import _ from 'lodash';

// const randomInRange = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
// const BASE_SIZE = 1;
// const VELOCITY_INC = 1.01;
// const VELOCITY_INIT_INC = 1.025;
// const JUMP_VELOCITY_INC = 1.25;
// const JUMP_SIZE_INC = 1.15;
// const SIZE_INC = 1.01;
// const RAD = Math.PI / 180;
// const WARP_COLORS = [
//     [197, 239, 247],
//     [25, 181, 254],
//     [77, 5, 232],
//     [165, 55, 253],
//     [255, 255, 255],
// ];

// class Star {
//     constructor() {
//         this.state = {
//             alpha: Math.random(),
//             angle: randomInRange(0, 360) * RAD,
//             active: false,
//             size: BASE_SIZE,
//             x: 0,
//             y: 0,
//             vX: 0,
//             vY: 0,
//             iX: undefined,
//             iY: undefined,
//             iVX: undefined,
//             iVY: undefined
//         };
//         this.reset();
//     }

//     reset() {
//         const angle = randomInRange(0, 360) * RAD;
//         const vX = Math.cos(angle);
//         const vY = Math.sin(angle);
//         const travelled = Math.random() * Math.max(window.innerWidth, window.innerHeight);

//         this.state = {
//             ...this.state,
//             iX: undefined,
//             iY: undefined,
//             active: travelled ? true : false,
//             x: Math.floor(vX * travelled) + window.innerWidth / 2,
//             vX,
//             y: Math.floor(vY * travelled) + window.innerHeight / 2,
//             vY,
//             size: BASE_SIZE,
//         };
//     }
// }

// const generateStarPool = (size) => new Array(size).fill().map(() => new Star());

// const LoadingScreen = () => {
//     useEffect(() => {
//         const STATE = {
//             stars: generateStarPool(300),
//             bgAlpha: 0,
//             sizeInc: SIZE_INC,
//             velocity: VELOCITY_INC,
//             initiating: false,
//             jumping: false,
//             initiateTimestamp: undefined
//         };

//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');

//         const render = () => {
//             context.clearRect(0, 0, window.innerWidth, window.innerHeight);
//             if (STATE.bgAlpha > 0) {
//                 context.fillStyle = `rgba(32, 32, 32, ${STATE.bgAlpha})`;
//                 context.fillRect(0, 0, window.innerWidth, window.innerHeight);
//             }

//             const nonActive = STATE.stars.filter((s) => !s.state.active);
//             if (!STATE.initiating && nonActive.length > 0) {
//                 nonActive[0].state.active = true;
//             }

//             for (const star of STATE.stars.filter((s) => s.state.active)) {
//                 const {
//                     active, x, y, iX, iY, iVX, iVY, size, vX, vY,
//                 } = star.state;

//                 if (
//                     ((iX || x) < 0 ||
//                         (iX || x) > window.innerWidth ||
//                         (iY || y) < 0 ||
//                         (iY || y) > window.innerHeight) &&
//                     active &&
//                     !STATE.initiating
//                 ) {
//                     star.reset();
//                 } else if (active) {
//                     const newIX = STATE.initiating ? iX : iX + iVX;
//                     const newIY = STATE.initiating ? iY : iY + iVY;
//                     const newX = x + vX;
//                     const newY = y + vY;

//                     const caught =
//                         (vX < 0 && newIX < x) ||
//                         (vX > 0 && newIX > x) ||
//                         (vY < 0 && newIY < y) ||
//                         (vY > 0 && newIY > y);

//                     star.state = {
//                         ...star.state,
//                         iX: caught ? undefined : newIX,
//                         iY: caught ? undefined : newIY,
//                         iVX: caught ? undefined : iVX * VELOCITY_INIT_INC,
//                         iVY: caught ? undefined : iVY * VELOCITY_INIT_INC,
//                         x: newX,
//                         vX: star.state.vX * STATE.velocity,
//                         y: newY,
//                         vY: star.state.vY * STATE.velocity,
//                         size: STATE.initiating
//                             ? size
//                             : size * (iX || iY ? SIZE_INC : STATE.sizeInc),
//                     };

//                     let color = `rgba(71, 44, 76, ${star.state.alpha})`;
//                     if (STATE.jumping) {
//                         const [
//                             r, g, b,
//                         ] = WARP_COLORS[randomInRange(0, WARP_COLORS.length - 1)];
//                         color = `rgba(${r}, ${g}, ${b}, ${star.state.alpha})`;
//                     }

//                     context.strokeStyle = color;
//                     context.lineWidth = size;
//                     context.beginPath();
//                     context.moveTo(star.state.iX || x, star.state.iY || y);
//                     context.lineTo(star.state.x, star.state.y);
//                     context.stroke();
//                 }
//             }

//             requestAnimationFrame(render);
//         };

//         const initiate = () => {
//             if (STATE.jumping || STATE.initiating) return;

//             STATE.initiating = true;
//             STATE.initiateTimestamp = new Date().getTime();

//             gsap.to(STATE, {
//                 duration: 0.25,
//                 velocity: VELOCITY_INIT_INC,
//                 bgAlpha: 0.1,
//             });

//             for (const star of STATE.stars.filter((s) => s.state.active)) {
//                 star.state = {
//                     ...star.state,
//                     iX: star.state.x,
//                     iY: star.state.y,
//                     iVX: star.state.vX,
//                     iVY: star.state.vY,
//                 };
//             }
//         };

//         const jump = () => {
//             STATE.bgAlpha = 0;
//             STATE.jumping = true;

//             gsap.to(STATE, {
//                 duration: 0.25,
//                 velocity: JUMP_VELOCITY_INC,
//                 bgAlpha: 0.5,
//                 sizeInc: JUMP_SIZE_INC,
//             });

//             setTimeout(() => {
//                 STATE.jumping = false;
//                 gsap.to(STATE, {
//                     duration: 0.25,
//                     bgAlpha: 0,
//                     velocity: VELOCITY_INC,
//                     sizeInc: SIZE_INC,
//                 });
//             }, 2500);
//         };

//         const enter = () => {
//             if (STATE.jumping) return;

//             STATE.initiating = false;
//             STATE.initiateTimestamp = undefined;
//             jump();
//         };

//         const setup = () => {
//             context.lineCap = 'round';
//             canvas.height = window.innerHeight;
//             canvas.width = window.innerWidth;
//             canvas.style.position = 'fixed';
//             canvas.style.top = 0;
//             canvas.style.left = 0;
//             canvas.style.zIndex = 1;
//         };

//         const reset = () => {
//             STATE.stars = generateStarPool(300);
//             setup();
//         };

//         const debouncedReset = _.debounce(reset, 250);

//         setup();
//         document.body.appendChild(canvas);
//         render();

//         // 初回ロード時に発火
//         STATE.initiateTimestamp = new Date().getTime();
//         enter();

//         window.addEventListener('resize', debouncedReset);

//         // 初回ロードが完了したら不要な処理を削除
//         const cleanup = () => {
//             window.removeEventListener('resize', debouncedReset);
//             document.body.removeChild(canvas);
//         };

//         // ここで初回のアニメーションの完了を検知してクリーンアップを実行
//         const checkIfComplete = () => {
//             if (!STATE.initiating && !STATE.stars.some(s => s.state.active)) {
//                 cleanup();
//             } 
//             // else {
//                 // requestAnimationFrame(checkIfComplete);
//             // }
//         };

//         checkIfComplete();

//         return () => {
//             cleanup();
//         };
//     }, []);

//     return null;
// };

// export default LoadingScreen;
