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
        xuanRan: function() {
            console.log(1)
            let baseUrl = "http://localhost:8080/month2-2/MeiZu";
            $.ajax({
                url: `${baseUrl}/lib/xuanRan.php`,
                type: "get",
                dataType: "json",
                success: function(res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm);
                        sp = JSON.parse(elm.smallpic)[0].small;
                        console.log(sp);
                        temp = `
                        <li class="smallimg">
                        <a href="${baseUrl}/src/html/detail.html?id=${elm.id}" target="_blank">
                        <span>领券</span>
                        <img src="${sp}" alt="">
                            <p class="name">${elm.name}</p>
                            <p class="intr">魅族牛逼!!</p>
                            <p class="price">￥${elm.price}</p>
                        </a>
                    </li>
                        `;
                        // console.log(temp)
                        $('.phone').append(temp);
                        if (elm.id % 4 == 0) {
                            $('.smallimg').eq(3).css('margin', 0);
                            $('.smallimg').eq(7).css('margin', 0);
                        }
                    })

                }
            });

        },


    }
})