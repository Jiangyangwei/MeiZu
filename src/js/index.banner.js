require.config({
    paths: {
        jquery: '../js/jquery.min',
        index: '../js/index'

    },
    shim: {}
});
require(['jquery', 'index'], function($, index) {
    index.banner(); //轮播图功能
    index.nav(); //导航栏功能
    index.xuanRan(); //首页渲染功能
    // console.log(1);
})