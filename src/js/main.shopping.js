require.config({
    paths: {
        jquery: "../js/jquery.min",
        shopping: "../js/shopping",
        // cookie: "../js/cookie",
        cart: './cart'
    },
    shim: {

    }
})
require(['jquery', 'shopping', 'cart'], function($, shopping, cart) {
    shopping.render(); //购物车详情渲染功能
    cart.cart()
})