define(['jquery', 'lazyload', 'cookie'], function($, lazyload, cookie) {
    return {
        detail: function(callback) {
            let baseUrl = "http://localhost:8080/month2-2/MeiZu";
            let id = location.search.split('=')[1];

            $.ajax({ //ajax请求后端数据
                type: "get",
                url: `${baseUrl}/lib/detail.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(res) {

                    let name = res.name;
                    let pic = JSON.parse(res.bigpic)[0];
                    let title = JSON.parse(res.title)[0];
                    let intr = JSON.parse(res.intr)[0];

                    //页面元素渲染
                    let phonelist = `
                  
                    <li>
                    <a href="javascript:;"><img src="${pic.bg01}" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="${pic.bg02}" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="${pic.bg03}" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="${pic.bg04}" alt=""></a>
                </li>`;
                    let buyphone = `
                <h3>${title.name}</h3>
                    <p>
                    ${title.int}
                    </p>
                    <div class="price">
                        <p><span>￥</span>${res.price}</p>
                        <div class="buy">
                            <p><span>加价购</span> 另加35元起，即可换购超值商品<a href="">立即加购&gt</a></p>
                        </div>
                    </div>
                    <div class="post">
                        <p>支&nbsp;&nbsp;持&nbsp;&nbsp;&nbsp;&nbsp;花呗分期&nbsp;&nbsp;&nbsp;&nbsp;顺丰发货&nbsp;&nbsp;&nbsp;&nbsp;7天无理由退货（激活后不支持）</p>
                        <p>
                            配送服务&nbsp;&nbsp;&nbsp;&nbsp;浙江省&nbsp;&nbsp;杭州市<br> 本商品由 魅族 负责发货并提供售后服务&nbsp;&nbsp;&nbsp;&nbsp;<a href="">商城客服</a>
                        </p>
                    </div>
                    <div class="intro">
                        <p><span class="lf">型号</span><span>${title.name}</span></p>
                        <p><span class="lf">网络类型</span><span>${title.internet}</span></p>
                        <p><span class="lf">颜色分类</span><span>蓝</span> <span>绿</span><span>橙</span></p>
                        <p><span class="lf">内存容量</span><span>6+128G</span><span>8+128G</span></p>
                        <p><span class="lf">选择套餐</span><span>官方标配</span><span>碎屏保套餐</span></p>
                        <p><span class="lf">数量</span><input type="number" value="1" min="1" max="${res.num}" class="num"></p>
                        <p class="buy"><a href="" class="tre">立即购买</a><span class="acker">加入购物车</span></p>
                    </div>
                `;
                    let intro = `
                <div class="wrap">
                <img class="lazy" data-original="${intr.tit01}">
                <img class="lazy" data-original="${intr.tit02}">
                <img class="lazy" data-original="${intr.tit03}" style="display:block">
                <img class="lazy" data-original="${intr.tit04}">
            </div>
                `;
                    //渲染结果添加至页面
                    $('.fixed h3').html(name);
                    $('.bp').append(`<a href="javascript:;"><img src="${pic.bg01}" alt=""></a>`)
                    $('.phonelist').append(phonelist);
                    $('.buyphone').append(buyphone);

                    $(function() {
                        $("img.lazy").lazyload({ effect: "fadeIn" });
                    });
                    $('.title').append(intro);

                    callback && callback(res.id, res.price, res.smallpic, res.name);
                }
            });



        },
        addIten: function(id, price, num, pic, title) {
            let product = {
                id: id,
                num: num,
                price: price,
                pic: pic,
                title: title
            };
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    })
                } else {
                    shop.push(product);
                };
            } else {
                shop = [];
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop))
        },
        tabs: function() {
            $('.phonelist>li>a>img').on('click', function() {
                console.log($(this));
                $('.bp>a>img').get(0).src = $(this).get(0).src;


            })
        }

    }
})