import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import IMAGE from './../../public/assets/scene.gltf';

const Three = () => {
  const mountRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let model: any;
    const elm: HTMLDivElement | any = mountRef.current

    const DISPLAY: { width: number, height: number, size: number }= {
      width: navigator.userAgent.match(/iPhone|Android.+Mobile/) ? window.innerWidth / 5 : window.innerWidth / 4,
      height: navigator.userAgent.match(/iPhone|Android.+Mobile/) ? window.innerHeight / 5 : window.innerHeight / 4,
      size: navigator.userAgent.match(/iPhone|Android.+Mobile/) ? (window.innerWidth / 5) / (window.innerHeight / 5) : (window.innerWidth / 3) / (window.innerHeight / 3),
    }

    const THREE_OBJECTS: { loader: any, scene: any, light: any, renderer: any, camera: any } = {
      loader: new GLTFLoader(),
      scene: new THREE.Scene(),
      light: new THREE.AmbientLight(0xFFFFFF, 1.0),
      renderer: new THREE.WebGLRenderer({ antialias: true, alpha: true }),
      camera: new THREE.PerspectiveCamera(10, DISPLAY.size, 1, 100),
    }

    const controls: any = new OrbitControls(THREE_OBJECTS.camera, THREE_OBJECTS.renderer.domElement); 

    elm.className = "flex justify-center";
    controls.maxDistance = 40;
    THREE_OBJECTS.camera.position.set(0, 40, 100)
    elm.appendChild(THREE_OBJECTS.renderer.domElement)

    function cachingDecorator(func: any): (x: any) => any {
      const cache: Map<any, any> = new Map();
      return x => {
        if (!x) {
          return func(x)
        }
        if (cache.has(x)) {
          return cache.get(x);
        }
        const result: any = func(x);
        cache.set(x, result);
        return result;
      }
    }

    const heavyFunc: Function = cachingDecorator(loop);
    window.onload = heavyFunc();

    async function loop() {
      model = await (() => new Promise(resolve => THREE_OBJECTS.loader.load(IMAGE, (gltf: any) => resolve(gltf.scene))))();
      makeModel();
      setLight();
    }

    function makeModel(): void {
      model.scale.set(0.2, 0.2, 0.2);
      model.position.set(0, 0, 0);
      THREE_OBJECTS.scene.add(model);
      THREE_OBJECTS.renderer.setSize(DISPLAY.width, DISPLAY.height);
      THREE_OBJECTS.renderer.setAnimationLoop(tick);
    };

    function tick(): void {
      controls.update();
      if (model.rotation.y <= 10) model.rotation.y += 0.3;
      if (model.rotation.y <= 20) model.rotation.y += 0.2;
      if (model.rotation.y <= 25) model.rotation.y += 0.15;
      if (model.rotation.y <= 35) model.rotation.y += 0.1;
      if (model.rotation.y <= 45) model.rotation.y += 0.07;
      if (model.rotation.y <= 50) model.rotation.y += 0.05;
      model.rotation.y += 0.03;
      THREE_OBJECTS.renderer.render(THREE_OBJECTS.scene, THREE_OBJECTS.camera);
    }

    function setLight(): void {
      const POSITION:number[][] = [
        [1, 5, 3.5, 6],
        [0, 1, 2, 4],
        [0, 2, 0, 2],
      ];
      for (let i = 0; i < POSITION.length; i++) {
        const directionalLight: any = new THREE.DirectionalLight(0xffffff, POSITION[i][3]);
        directionalLight.position.set(POSITION[i][0], POSITION[i][1], POSITION[i][2]);
        if (i == 0 || i == 2 || i == 3) {
          directionalLight.castShadow = true;
          directionalLight.shadow.mapSize.set(4096, 4096);
        }
        THREE_OBJECTS.scene.add(directionalLight);
      }
    }

    return () => {
      elm?.removeChild(THREE_OBJECTS.renderer.domElement)
    }
  }, [])
  return (
    <div ref={mountRef} />
  )
}

export default Three