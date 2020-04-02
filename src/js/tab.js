import $ from 'jquery';
import 'slick-carousel';

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
  //スライドのセットアップ
  setupSlide();
  setupTab();
}

/**
 * スライドの設定処理
 */
function setupSlide() {
  const groups = ["#js-tab__edit--figures", "#js-tab__board--figures", "#js-tab__multiuser--figures", "#js-tab-realtime--figures"];

  for (let i = 0; i < groups.length; i++) {
    let $target = $(groups[i]);
    $target.slick({
      prevArrow: '<div class="slide-arrow prev-arrow"></div>',
      nextArrow: '<div src="images/arrow_r.gif" alt="next" class="slide-arrow next-arrow"></div>'

    }
    );
  }
}

/**
 * タブの設定処理
 */
function setupTab() {
  const targets = ["#js-tab__edit", "#js-tab__board", "#js-tab__multiuser", "#js-tab-realtime"];
  changeTab($(targets[0]));

  for (let i = 0; i < targets.length; i++) {
    $(targets[i]).on("click", (e) => {
      const $target = $(e.target);
      changeTab($target);
      return false;
    });
  }
}


/**
 * タブのIDを与えるとタブコンテンツを切り替える処理
 * @param {*} $target 
 */
function changeTab($target) {

  //タブとコンテンツの表示処理
  $("ul.js-tab li a").removeClass("p-feature__tab--current");
  $(".js-tab-item").hide();
  const $myContent = $("#" + $target.attr("id") + "--content");
  $target.addClass("p-feature__tab--current");
  $myContent.show();

  //slickのposition処理のfire
  const $mySlide = $("#" + $target.attr("id") + "--figures");
  $mySlide.slick('setPosition');

}
