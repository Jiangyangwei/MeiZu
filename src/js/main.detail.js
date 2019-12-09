require.config({
    paths: {
        jquery: "../js/jquery.min",
        detail: "../js/detail",
        lazyload: "../js/jquery.lazyload.min",
        cookie: "./cookie"
    },
    shim: {
        lazyload: ['jquery'] //页面懒加载
    }
})
require(['jquery', 'detail', 'cookie'], function($, detail, cookie) {
    detail.detail(function(id, price, pic, title) { //页面元素渲染
        detail.tabs(); //选项卡功能
        $('.acker').on('click', function() {
            detail.addIten(id, price, $('.num').val(), pic, title) //点击将商品加入购物车
        });

    });
    // detail.addIten();

})