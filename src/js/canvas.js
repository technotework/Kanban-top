import * as THREE from 'three';

//init
window.addEventListener("DOMContentLoaded", init);

let renderer, box1, box2, scene, camera, w, h;

/**
 * 初期化
 */
function init() {

  window.addEventListener('resize', onResize);
  init3D();
  tick();
}

/**
 * treeJSInitialize
 */
function init3D() {

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.querySelector("#js-canvas-main")
  });
  renderer.setClearColor(0xffffff, 0);

  //SCENE
  scene = new THREE.Scene();

  //CAMERA
  camera = new THREE.PerspectiveCamera(
    35,
    w / h,
    1,
    8000
  );
  camera.position.set(0, 700, 7000);

  //SIZE

  let w = window.innerWidth;
  //BOX
  let geometry1 = new THREE.DodecahedronGeometry(1200);
  let geometry2 = new THREE.DodecahedronGeometry(1400);
  let material = new THREE.MeshStandardMaterial({
    color: 0xececec
  });
  box1 = new THREE.Mesh(geometry1, material);
  scene.add(box1);
  box2 = new THREE.Mesh(geometry2, material);
  scene.add(box2);

  setPosition(w);
  //LIGHT
  let directionLight = new THREE.DirectionalLight(0xcccccc, 0.29);
  scene.add(directionLight);
  directionLight.position.set(0, 100, 100);
  let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
  scene.add(ambientLight);
  onResize();
  renderer.render(scene, camera);
}

/**
 * TIC
 */
function tick() {

  requestAnimationFrame(tick);

  let unit1 = 0.0025;
  let unit2 = 0.004;

  box1.rotation.x -= unit1;
  box1.rotation.y += unit2;

  box2.rotation.x += unit2;
  box2.rotation.y -= unit1;

  // レンダリング
  renderer.render(scene, camera);

}


/**
 * setSize
 */
function onResize() {

  w = window.innerWidth;
  h = 800;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  setPosition(w);
}

/**
 * 位置を比率連動計算
 * @param {*} value 
 * @param {*} minVal 
 * @param {*} maxVal 
 */
function ratio(value, minVal, maxVal) {

  let maxW = 880;
  let minW = 375;
  let a = (maxVal - minVal) / (maxW - minW);
  let b = maxVal - (maxW * a);
  let y = a * value + b;

  return y;
}

/**
 * 位置決定
 * @param {*} w 
 */
function setPosition(w) {

  if (w >= 880) {
    box1.position.set(-2500, 0, 0);
    box2.position.set(2600, 2000, 0);
  } else {

    box1.position.set(ratio(w, -1200, -2500), ratio(w, 700, 0), 0);
    box2.position.set(ratio(w, 1400, 2600), ratio(w, 2500, 2000), 0);
  }
}