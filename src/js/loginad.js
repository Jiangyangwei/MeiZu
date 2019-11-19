define(['jquery', 'md5'], function($) {
    return {
        login: function() {
            $('.login').on('click', function() {
                $.ajax({
                    url: 'http://127.0.0.1:8080/month2-2/MeiZu/lib/login.php',
                    type: 'post',
                    data: {
                        dephone: $('.dephone').val(),
                        keywords: $.md5($('.keywords').val()),
                    },
                    success: function(res) {
                        alert(JSON.parse(res).msg);
                    }
                })
            })
        }
    }
})