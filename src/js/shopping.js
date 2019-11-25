let baseUrl = "http://localhost:8080/month2-2/MeiZu";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            console.log(shop);
            if (shop) {
                shop = JSON.parse(shop);
                shop = shop.slice(1)
                let count = 0;
                var temp = '';
                shop.forEach(elm => {
                    // console.log(elm);
                    let picture = JSON.parse(elm.pic)[0]
                        // console.log(picture);
                    console.log(elm.name)
                    count++;
                    alert(1)
                        // let pic = JSON.parse(elm.pic);
                    temp += `
                        <ul class="order_lists">
                        <li class="list_chk">
                            <input type="checkbox" id="checkbox_${count}" class="son_check">
                            <label for="checkbox_${count}"></label>
                        </li>
                        <li class="list_con">
                            <div class="list_img">
                                <a href="javascript:;"><img src="${picture.small}" alt=""></a>
                            </div>
                            <div class="list_text"><a href="javascript:;">${elm.title}</a></div>
                        </li>
                        <li class="list_info">
                            <p>规格：默认</p>
                            <p>尺寸：16*16*3(cm)</p>
                        </li>
                        <li class="list_price">
                            <p class="price">${elm.price}</p>
                        </li>
                        <li class="list_amount">
                            <div class="amount_box">
                                <a href="javascript:;" class="reduce reSty">-</a>
                                <input type="text" value="1" class="sum">
                                <a href="javascript:;" class="plus">+</a>
                            </div>
                        </li>
                        <li class="list_sum">
                            <p class="sum_price">￥980</p>
                        </li>
                        <li class="list_op">
                            <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                        </li>
                    </ul>
                    `
                });
                // console.log(temp)
                $('.order_content').append(temp)

            }
        }
    }
})