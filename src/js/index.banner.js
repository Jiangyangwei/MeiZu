require.config({
    paths: {
        jquery: '../js/jquery.min',
        index: '../js/index'

    },
    shim: {}
});
require(['jquery', 'index'], function($, index) {
    index.banner();
    index.nav();
    index.xuanRan();
    // console.log(1);
})