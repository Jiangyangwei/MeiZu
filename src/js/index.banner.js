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
    // console.log(1);
})