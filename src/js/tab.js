import $ from 'jquery';

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

  const targets = ["#js-tab__board", "#js-tab__multiuser", "#js-tab-realtime"];
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
  $("ul.js-tab li a").removeClass("p-feature__tab--current");
  $(".js-tab-item").hide();
  const $myContent = $("#" + $target.attr("id") + "--content");
  $target.addClass("p-feature__tab--current");
  $myContent.show();
}