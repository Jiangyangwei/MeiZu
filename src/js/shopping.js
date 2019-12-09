let baseUrl = "http://localhost:8080/month2-2/MeiZu";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let count = 0;
                var temp = '';
                shop.forEach(elm => {
                    console.log(elm)
                    let picture = JSON.parse(elm.pic)[0]

                    count++;
                    let price = elm.num * elm.price
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
                            <p class="price">￥${elm.price}</p>
                        </li>
                        <li class="list_amount">
                            <div class="amount_box">
                                <a href="javascript:;" class="reduce reSty">-</a>
                                <input type="text" value="${elm.num}" class="sum">
                                <a href="javascript:;" class="plus">+</a>
                            </div>
                        </li>
                        <li class="list_sum">
                            <p class="sum_price">￥${price}</p>
                        </li>
                        <li class="list_op">
                            <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                        </li>
                    </ul>
                    `
                });
                $('.order_content').append(temp);
            }
        }

        // render: function(callback) {
        //     let shopArr = document.cookie.split('=')[1];
        //     let shop = JSON.parse(shopArr)
        //     let arr = [];
        //     let count = 0;
        //     shop.forEach(value => {
        //         count++;
        //         let temp = `
        //             <ul class="order_lists">
        //             <li class="list_chk">
        //                 <input type="checkbox" id="checkbox_${count}" class="son_check">
        //                 <label for="checkbox_${count}"></label>
        //             </li>
        //             <li class="list_con">
        //                 <div class="list_img">
        //                     <a href="javascript:;"><img src="${picture.small}" alt=""></a>
        //                 </div>
        //                 <div class="list_text"><a href="javascript:;">${elm.title}</a></div>
        //             </li>
        //             <li class="list_info">
        //                 <p>规格：默认</p>
        //                 <p>尺寸：16*16*3(cm)</p>
        //             </li>
        //             <li class="list_price">
        //                 <p class="price">${elm.price}</p>
        //             </li>
        //             <li class="list_amount">
        //                 <div class="amount_box">
        //                     <a href="javascript:;" class="reduce reSty">-</a>
        //                     <input type="text" value="${elm.num}" class="sum">
        //                     <a href="javascript:;" class="plus">+</a>
        //                 </div>
        //             </li>
        //             <li class="list_sum">
        //                 <p class="sum_price">${elm.price}</p>
        //             </li>
        //             <li class="list_op">
        //                 <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
        //             </li>
        //         </ul>
        //         `
        //         $('.order_content').append(temp)
        //     });
        //     callback && callback();
        // }
    }
})