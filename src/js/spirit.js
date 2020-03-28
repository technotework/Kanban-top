import $ from 'jquery';
import spirit from 'spiritjs';
import fig_one from './fig_one.json';

/*---------------------------
Spirit Animation 制御
---------------------------*/
let $astro;
let astroIsPlay;

/**
 * ready
 */
$(() => {

  spirit.loadAnimation({
    autoPlay: false,
    loop: 50,
    yoyo: true,
    animationData: fig_one,
    timeScale: 0.79
  }).then(timeline => {

    init(timeline);
  });

});

/**
 * 初期設定
 */
function init(timeline) {

  $astro = $("#js-astro");
  astroIsPlay = false;

  check(timeline);

  $("#js-wrapper").scroll(() => {
    check(timeline);
  });

  $(window).resize(() => {
    check(timeline);
  });

}

/**
 * オブジェクト位置を確認して再生するかどうかをきめる
 * @param {*} timeline 
 */
function check(timeline) {
  let wh = document.documentElement.clientHeight;
  let astroTop = $astro.offset().top;

  if (astroIsPlay == false && wh >= astroTop) {
    timeline.play();
    astroIsPlay = true;
  }
  if (astroIsPlay == true && (wh < astroTop || astroTop < -460)) {
    timeline.pause(0);
    astroIsPlay = false;
  }
}




