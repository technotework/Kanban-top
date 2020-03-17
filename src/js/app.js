import "../sass/index.scss";
import * as THREE from 'three';

//init
window.addEventListener("DOMContentLoaded", init);

let renderer, box, scene, camera, w, h;

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
    45,
    w / h,
    1,
    10000
  );
  camera.position.set(0, 0, +6000);

  //SIZE
  onResize();

  //BOX
  let geometry = new THREE.BoxGeometry(500, 500, 500);
  let material = new THREE.MeshStandardMaterial({
    color: 0xececec
  });
  box = new THREE.Mesh(geometry, material);
  scene.add(box);

  //LIGHT
  let directionLight = new THREE.DirectionalLight(0xffffff, 0.2);
  scene.add(directionLight);
  directionLight.position.set(1, 1, 1);
  let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
  scene.add(ambientLight);

  renderer.render(scene, camera);
}

/**
 * TIC
 */
function tick() {

  requestAnimationFrame(tick);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  // レンダリング
  renderer.render(scene, camera);

}


/**
 * setSize
 */
function onResize() {

  w = window.innerWidth;
  h = 500;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
