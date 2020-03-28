import $ from 'jquery';

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

  $("#js-wrapper").scroll(() => {

    //スクロール量に比例して背景を薄くする
    const start = 50;
    const end = start + 1120;
    const startAlpha = 1;
    const endAlpha = 0;
    let result;

    let scroll = $("#js-wrapper").scrollTop();

    if (scroll < start) {
      result = 1;
    } else if (scroll < end) {
      let a = (startAlpha - endAlpha) / (start - end);
      let b = startAlpha - start * a;
      result = Math.floor((scroll * a + b) * 100) / 100;

    } else if (scroll > end) {
      result = endAlpha;
    }
    $("#js-canvas").css({ 'opacity': result });
  });

}