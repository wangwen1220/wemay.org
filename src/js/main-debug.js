////////////////////////////////////////////////////////////////////////////////
// 名称: 主程序
// 作者: Steven wangwen1220@139.com
// 说明: 依赖 jQuery
// 日期: 2014-3-26
////////////////////////////////////////////////////////////////////////////////
jQuery(function($) {
  var $online = $('#js-online');

  // 在线客服展开/折叠
  $online.on('click', '.w-online-trigger', function(e) {
    var $ths = $(this);
    var $service = $ths.next();

    $ths.toggleClass('unfold');
    $service.animate({
      width: 'toggle',
      opacity: 'toggle'
    });
    return false;
  });

  // 当在线客服展开状态下，点击页面使其折叠
  /*$(document).on('click', function(e) {
    var $trigger = $online.find('.w-online-trigger');
    if ($trigger.hasClass('unfold') && !$(e.target).parents('#js-online').length) {
      $trigger.click();
    }
  });*/

  // 跟随滚动效果
  // $(window).scroll(function() {
  //   $online.stop().animate({top: $(document).scrollTop() + $online.height()}, 100);
  // });
});