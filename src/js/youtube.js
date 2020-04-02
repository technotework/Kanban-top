import $ from 'jquery';

let $youtube, $iframe;
let size = { w: 0, h: 0 };

/**
 * ready
 */
$(() => {
  init();
});

/**
 * 初期化
 */
function init() {

  $youtube = $("#js-youtube");
  $iframe = $("#js-youtube-iframe");
  resize();

  $(window).resize(() => {
    resize();
  });

}

function resize() {

  size.w = $youtube.width();
  size.h = Math.floor(size.w * 0.5659) + "px";

  $youtube.height(size.h);
  $iframe.width(size.w);
  $iframe.height(size.h);
}