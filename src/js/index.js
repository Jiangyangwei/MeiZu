define(['jquery'], function($) {
    return {
        banner: function() {
            var left = 0,
                index = 0;
            var timer = null;
            var an = $('.btn span');
            // var tiko = '.btn span'
            var att = function() {
                timer = setInterval(() => {
                    if (index < 7) {
                        left -= 1899;
                        $('.move').animate({ left: left });
                        an.eq(index + 1).addClass('scroll').siblings().removeClass('scroll');
                        index++;
                        if (index >= 7) {
                            an.eq(0).addClass('scroll').siblings().removeClass('scroll');
                        }
                    } else {
                        index = 0;
                        left = 0;
                        $('.move').stop(true, true).css('left', left);

                    }
                }, 3000);
            }
            att();


            $('.move').on('mouseover', function() {
                clearInterval(timer);
            });
            $('.move').on('mouseout', function() {
                att();
            });
            an.on('click', function() {
                clearInterval(timer);
                index = $(this).index();
                left = -index * 1899;
                $('.move').animate({ left: left });
                an.eq(index).addClass('scroll').siblings().removeClass('scroll');
                att();
            })

        },
        nav: function() {
            $('.nav .change').on('mouseover', function() {
                $('h1 .icon-meizu').css('color', '#00b9f2');
                $('.nav a').css('color', '#000');
                $('.user').css('color', '#000');
                $('.twice').animate({ top: '0px' });
                $('.user .icon-gouwuche').css('color', '#000');
            });
            $('.nav .change').on('mouseout', function() {
                $('.twice').animate({ top: '-273px' });
                $('h1 .icon-meizu').css('color', '#fff');
                $('.nav a').css('color', '#fff');
                $('.user').css('color', '#fff');
                $('.user .icon-gouwuche').css('color', '#fff');


            })
        },


    }
})