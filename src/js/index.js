import "../css/index.css"
import "../css/About.css"
import "../css/Information.css"
window.onload = function () {
  $(function () {
    //下拉菜单
    $('.tabs').mousemove(function () {
      $(this).find('.item').slideDown();
      $(this).addClass("hover")
    });
    $('.tabs').mouseleave(function () {
      $(this).find('.item').slideUp("")
      $(this).removeClass("hover")
    });
  });
  //下拉菜单end
}