require.config({
    paths: {
        jquery: "../js/jquery.min",
        shopping: "../js/shopping",
        cookie: "../js/cookie"


    },
    shim: {

    }
})
require(['jquery', 'shopping'], function($, shopping) {
    shopping.render();

})