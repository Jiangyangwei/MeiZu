define(['jquery', 'md5'], function($) {
    return {
        regtt: function() {
            let uemail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            let upass = /^[A-z]\w{7,15}$/
            let uphone = /^1[3-9]\d{9}$/;

            //验证密码
            $('.password').on('keyup', function() {
                if (upass.test($('.password').val())) {
                    $('.upass').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.upass').html('未通过验证').addClass('red').removeClass('green')
                }
            });
            //确认密码
            $('.getname').on('keyup', function() {

                    if ($('.getname').val() == $('.password').val()) {
                        $('.commit').html('密码一致，可以注册').addClass('green').removeClass('red')
                    } else {
                        $('.commit').html('密码不一致，请重新输入').addClass('red').removeClass('green')
                    }
                })
                //验证手机号
            $('.phone').on('keyup', function() {
                if (uphone.test($('.phone').val())) {
                    $('.uphone').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.uphone').html('未通过验证').addClass('red').removeClass('green')
                }
            })
            $('.email').on('keyup', function() {
                    if (uemail.test($('.email').val())) {
                        $('.uemail').html('通过验证').addClass('green').removeClass('red')
                    } else {
                        $('.uemail').html('未通过验证').addClass('red').removeClass('green')
                    }
                })
                //提交数据
            $('.login').on('click', function() {
                $.ajax({
                    url: 'http://127.0.0.1:8080/month2-2/MeiZu/lib/reg.php',
                    type: 'post',
                    data: {
                        phone: $('.phone').val(),
                        password: $.md5($('.password').val()),

                        email: $('.email').val(),
                    },
                    success: function(res) {
                        alert(JSON.parse(res).msg);
                    }
                })
            })
        }
    }
})