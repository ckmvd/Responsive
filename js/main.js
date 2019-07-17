/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-12 11:01:38
 */

'use strict';
$(function () {
    function resize() {
        var windowWidth = $(window).width()//获取屏幕宽度
        // console.log(windowWidth)
        //判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        //根据大小设置轮播图背景
        // $('#main_ad> .carousel-inner > .item')  //获取到DOM数组
        $('#main_ad> .carousel-inner > .item').each(function (i, item) {
            var $item = $(item)
            // var imgSrc=$item.data(isSmallScreen?'image-xs':'image-lg')
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg')
            $item.css('backgroundImage', 'url("' + imgSrc + '")')
        })
    }
    $(window).on('resize', resize).trigger('resize');
})