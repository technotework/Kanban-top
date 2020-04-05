import $ from "jquery";
/**
 * ready
 */
$(window).on("load", () => {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("#js-wrapper").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
