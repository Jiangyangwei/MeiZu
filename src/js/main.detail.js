require.config({
    paths: {
        jquery: "../js/jquery.min",
        detail: "../js/detail",
        lazyload: "../js/jquery.lazyload.min",
        cookie: "./cookie"
    },
    shim: {
        lazyload: ['jquery']
    }
})
require(['jquery', 'detail', 'cookie'], function($, detail, cookie) {
    detail.detail(function(id, price, pic, title) {
        $('.acker').on('click', function() {
            detail.addIten(id, price, $('.num').val(), pic, title)
        })
    });
    detail.addIten();
})