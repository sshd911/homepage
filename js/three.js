init();

async function init() {
  const parentCanvas = document.getElementById('parentCanvas');
  const childCanvas = document.getElementById('childCanvas');
  const canvas = document.createElement('canvas');
  childCanvas.appendChild(canvas);
  parentCanvas.appendChild(childCanvas);
  document.body.appendChild(parentCanvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const scene = new THREE.Scene();
  const width = window.innerWidth;
  const height = window.innerHeight/2;
  renderer.setPixelRatio(1);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  const camera = new THREE.PerspectiveCamera(10, width / height, 1, 100);
  camera.position.set(0, 0, 100);
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.maxDistance = 1;
  controls.maxDistance = 40;
  const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
  scene.add(light);
  const loader = new THREE.GLTFLoader();
  const url = './img/scene.gltf';

  const model = await (() => {
    return new Promise((resolve) => {
      loader.load(url,(gltf) => {resolve(gltf.scene);});
    });
  })(); 

  model.position.set(0, 0, 0);
  scene.add(model);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width/1.2, height);
  renderer.setAnimationLoop(tick);
  setLight();
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

  function setLight(){
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
}