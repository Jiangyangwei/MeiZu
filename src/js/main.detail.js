require.config({
    paths: {
        jquery: "../js/jquery.min",
        detail: "../js/detail",
        lazyload: "../js/jquery.lazyload.min"
    },
    shim: {
        lazyload: ['jquery']
    }
})
require(['jquery', 'detail'], function($, detail) {
    detail.detail();

})