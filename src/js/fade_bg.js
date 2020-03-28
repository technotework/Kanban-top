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

    const start = 90;
    const end = start + 600;
    const startAlpha = 1;
    const endAlpha = 0.3;
    let result;

    let scroll = $("#js-wrapper").scrollTop();

    console.log(scroll);

    if (scroll < start) {
      result = 1;
    }
    else if (scroll < end) {
      let a = (startAlpha - endAlpha) / (start - end);
      let b = startAlpha - start * a;
      result = Math.floor((scroll * a + b) * 100) / 100;
    }
    $("#js-canvas").css({ 'opacity': result });
  });

}