import $ from 'jquery';
import spirit from 'spiritjs';
import fig_one from './json/fig_one.json';
import card from './json/card';

/*---------------------------
Spirit Animation 制御
---------------------------*/

/**
 * ready
 */
$(() => {

  const $astro = $("#js-astro");
  const $cards = $("#js-cards");

  //宇宙飛行士
  spirit.loadAnimation({
    autoPlay: false,
    loop: 0,
    yoyo: true,
    animationData: fig_one,
    timeScale: 0.79
  }).then(timeline => {

    let obj = {
      timeline: timeline,
      $target: $astro,
      playFlag: false,
      outHeight: -460,
      offset: 0
    };
    init(obj);
  });

  //カード
  spirit.loadAnimation({
    autoPlay: false,
    loop: 0,
    yoyo: false,
    animationData: card,
    timeScale: 0.75
  }).then(timeline => {

    const obj = {
      timeline: timeline,
      $target: $cards,
      playFlag: false,
      outHeight: -415,
      offset: 450
    };
    init(obj);

    $("#js-replay").on("click", () => {
      timeline.pause(0);
      timeline.play();
      return false;
    });
  });

});

/**
 * 初期設定
 */
function init(obj) {

  obj.playFlag = false;
  check(obj);
  resize(obj);

  $("#js-wrapper").scroll(() => {
    check(obj);
  });

  $(window).resize(() => {
    check(obj);
    resize(obj);
  });

}

/**
 * オブジェクト位置を確認して再生するかどうかをきめる
 * @param {*} timeline 
 */
function check(obj) {

  let { timeline, $target, outHeight, offset } = obj;

  let wh = document.documentElement.clientHeight;
  let astroTop = $target.offset().top + offset;

  if (obj.playFlag == false && wh >= astroTop) {
    timeline.play();
    obj.playFlag = true;
  }
  if (obj.playFlag == true && (wh < astroTop || astroTop < outHeight)) {
    timeline.pause(0);
    obj.playFlag = false;
  }
}

/**
 * 縮小処理
 * @param {*} obj 
 */
function resize(obj) {

  let { $target } = obj;
  let ww = document.documentElement.clientWidth;
  const baseW = 800;
  const baseCardHeight = 446;
  let ratio = Math.floor(ww / baseW * 100) / 100;
  let result;
  let cardHeight;
  if (ww < 800) {
    result = `scale(${ratio})`;
    cardHeight = Math.floor(baseCardHeight * ratio) + "px";
  } else {
    result = "scale(1)";
    cardHeight = baseCardHeight;
  }
  $target.css('transform', result);

  $("#js-cards").css('height', cardHeight);


}




