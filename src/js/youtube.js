import YouTubePlayer from 'youtube-player';
import $ from 'jquery';

let $youtube;
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
  resize();

  let player;
  player = YouTubePlayer('js-youtube-iframe', {
    width: size.w,
    height: size.h,
    videoId: 'M5jh78v9KAw',
    playerVars: {
      rel: 0,
      showinfo: 0,
      modestbranding: 0,
    }

  });

  $(window).resize(() => {
    resize();
  });

}

function resize() {

  size.w = $youtube.width();
  size.h = Math.floor(size.w * 0.5659) + "px";

  $youtube.height(size.h);
}