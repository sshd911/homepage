const canvas = document.createElement('canvas');
document.body.appendChild(canvas).className = 'mx-auto';
// ---------------------------------------------------------------- append canvas
const url = './img/scene.gltf';
const loader = new THREE.GLTFLoader();
const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
// ---------------------------------------------------------------- task 1
let camera;
let controls;
let model;
var resize_flag = true;
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(1);
renderer.setPixelRatio(window.devicePixelRatio);
scene.add(light);
window.onresize = changeFlag;
window.onload = init;
const width = window.innerWidth/3;
const height = window.innerHeight/3;
// ---------------------------------------------------------------- task 2

function resizeSettings() {
  camera = new THREE.PerspectiveCamera(10, width / height, 1, 100);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 40, 100);
  controls.maxDistance = 40;
}

function resizeWindow() {
  resizeSettings();
  makeModel();
}

function makeModel() {
  model.scale.set(0.2, 0.2, 0.2);
  model.position.set(0, 0, 0);
  scene.add(model);
  renderer.setSize(width, height);
  renderer.setAnimationLoop(tick);
};

function changeFlag() {
  resize_flag = true;
}

async function init() {
  model = await (() => new Promise(resolve => loader.load(url, gltf => resolve(gltf.scene))))();
  resizeWindow();
  setLight();
}

function tick() {
  controls.update();
  if (model.rotation.y <= 10) model.rotation.y += 0.4;
  if (model.rotation.y <= 30) model.rotation.y += 0.3;
  if (model.rotation.y <= 50) model.rotation.y += 0.2;
  if (model.rotation.y <= 65) model.rotation.y += 0.1;
  if (model.rotation.y <= 70) model.rotation.y += 0.05;
  if (model.rotation.y <= 75) model.rotation.y += 0.05;
  if (model.rotation.y) model.rotation.y += 0.02;
  renderer.render(scene, camera);
}

function setLight() {
  const positionArr = [
    [1, 5, 3.5, 6],
    [0, 1, 2, 4],
    [0, 2, 0, 2],
  ];
  for (let i = 0; i < positionArr.length; i++) {
    const directionalLight = new THREE.DirectionalLight(0xffffff, positionArr[i][3]);
    directionalLight.position.set(positionArr[i][0], positionArr[i][1], positionArr[i][2]);
    if (i == 0 || i == 2 || i == 3) {
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.set(4096, 4096);
    }
    scene.add(directionalLight);
  }
}