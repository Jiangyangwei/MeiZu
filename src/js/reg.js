 require.config({
     paths: {
         jquery: "../js/jquery.min",
         md5: "../js/jquery.md5",
         regad: "./regad"
     },
     shim: {
         md5: ['jquery']
     }
 })
 require(['jquery', 'regad'],
     function($, regad) {
         regad.regtt(); //注册验证格式是否正确功能
     }
 )