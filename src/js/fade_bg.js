import $ from 'jquery';
import { startTic, endTic } from './canvas'

let isStart = false;

/**
 * ready
 */
$(() => {
  init();
});

/**
 * 初期設定
 */
function init() {

  startAnimation();

  let initAlpha = $("#js-canvas").css("opacity");

  $("#js-wrapper").scroll(() => {

    //スクロール量に比例して背景を薄くする
    const start = 50;
    const end = start + 1000;
    const startAlpha = initAlpha;
    const endAlpha = 0;
    let result;

    let scroll = $("#js-wrapper").scrollTop();

    if (scroll < start) {
      result = initAlpha;
      //startAnimation();

    } else if (scroll < end) {
      let a = (startAlpha - endAlpha) / (start - end);
      let b = startAlpha - start * a;
      result = Math.floor((scroll * a + b) * 100) / 100;
      startAnimation();

    } else if (scroll > end) {
      result = endAlpha;
      stopAnimation();
    }
    $("#js-canvas").css({ 'opacity': result });
  });

}

/**
 * start trigger animation
 */
function startAnimation() {

  if (isStart == false) {
    startTic();
    isStart = true;
  }
}


/**
 * start trigger animation
 */
function stopAnimation() {

  if (isStart == true) {
    endTic();
    isStart = false;
  }
}