import "../sass/index.scss";
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
    canvas: document.querySelector("#top")
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
  onResize();

  //BOX
  let geometry1 = new THREE.DodecahedronGeometry(1200);
  let geometry2 = new THREE.DodecahedronGeometry(1400);
  let material = new THREE.MeshStandardMaterial({
    color: 0xececec
  });
  box1 = new THREE.Mesh(geometry1, material);
  scene.add(box1);
  box1.position.set(-2500, 0, 0);

  box2 = new THREE.Mesh(geometry2, material);
  scene.add(box2);
  box2.position.set(2600, 2000, 0);

  //LIGHT
  let directionLight = new THREE.DirectionalLight(0xcccccc, 0.29);
  scene.add(directionLight);
  directionLight.position.set(0, 100, 100);
  let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
  scene.add(ambientLight);

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
}
