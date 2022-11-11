'use strict';

const canvas = document.getElementById('c1');

const DISPLAY = {
  width: navigator.userAgent.match(/iPhone|Android.+Mobile/) ? window.innerWidth / 5 : window.innerWidth / 3,
  height: navigator.userAgent.match(/iPhone|Android.+Mobile/) ? window.innerHeight / 5 : window.innerHeight / 3,
  size: navigator.userAgent.match(/iPhone|Android.+Mobile/) ? (window.innerWidth / 5) / (window.innerHeight / 5) : (window.innerWidth / 3) / (window.innerHeight / 3),
}
const THREE_OBJECTS = {
  loader: new THREE.GLTFLoader(),
  scene: new THREE.Scene(),
  light: new THREE.AmbientLight(0xFFFFFF, 1.0),
  renderer: new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }),
  camera: new THREE.PerspectiveCamera(10, DISPLAY.size, 1, 100),
}

let model;
const controls = new THREE.OrbitControls(THREE_OBJECTS.camera, THREE_OBJECTS.renderer.domElement, 2000); 
controls.maxDistance = 40;
THREE_OBJECTS.camera.position.set(0, 40, 100)

function cachingDecorator(func) {
  const cache = new Map();
  return x => {
    if (!x) {
      return func(x)
    }
    if (cache.has(x)) {
      return cache.get(x);
    }
    const result = func(x);
    cache.set(x, result);
    return result;
  }
}

const heavyFunc = cachingDecorator(loop);

window.onload = heavyFunc();

async function loop(){
  model = await (() => new Promise(resolve => THREE_OBJECTS.loader.load("./img/scene.gltf", gltf => resolve(gltf.scene))))();
  makeModel();
  setLight();
}

function makeModel() {
  model.scale.set(0.2, 0.2, 0.2);
  model.position.set(0, 0, 0);
  THREE_OBJECTS.scene.add(model);
  THREE_OBJECTS.renderer.setSize(DISPLAY.width, DISPLAY.height);
  THREE_OBJECTS.renderer.setAnimationLoop(tick);
};

function tick() {
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

function setLight() {
  const POSITION = [
    [1, 5, 3.5, 6],
    [0, 1, 2, 4],
    [0, 2, 0, 2],
  ];
  for (let i = 0; i < POSITION.length; i++) {
    const directionalLight = new THREE.DirectionalLight(0xffffff, POSITION[i][3]);
    directionalLight.position.set(POSITION[i][0], POSITION[i][1], POSITION[i][2]);
    if (i == 0 || i == 2 || i == 3) {
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.set(4096, 4096);
    }
    THREE_OBJECTS.scene.add(directionalLight);
  }
}
