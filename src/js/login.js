require.config({
    paths: {
        jquery: "../js/jquery.min",
        md5: "../js/jquery.md5",
        loginad: "./loginad"
    },
    shin: {
        md5: ['jquery']
    }
})
require(['jquery', 'loginad'], function($, loginad) {
    loginad.login(); //登陆数据与数据库匹配功能

})