var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (event) {
        var clicked_element = event.target;
        if (clicked_element.closest('.add_to_cart') != null) {
            var card_parent = this.closest('.card');

            var parent_of_cart = card_parent.querySelector('.price-button');

            var fixed_price = card_parent.querySelector('.price-number').textContent.replace('$', '');

            var big_parent = parent_of_cart.parentElement;

            var all_parent = big_parent.parentElement;
            var card_image = all_parent.children[0].getAttribute('src');

            document.getElementById('nop').classList.add('d-none');


            var product_price = big_parent.querySelector('.fix-price').textContent;
            var prices_num = parseInt(product_price);

            var product_name = all_parent.querySelector('.product_name>b').textContent;
            var product_unit = all_parent.querySelector('.product_name>span').textContent;
            var counter = 1;
            var sum = 1 * prices_num;
            sum = sum.toFixed(2);
            // var added_product = document.querySelector(`[card_title1="${product_name}"]`);
            // var all_sum = 0;
            // all_sum = parseInt(document.querySelector('.price-sums').textContent);


            // if (added_product) {
            //     if (!card_parent.querySelector('.price-button').classList.contains('d-none')) {
            //         all_sum = parseInt(document.querySelector('.price-sums').textContent);
            //         all_sum = parseInt(all_sum) + parseInt(sum);
            //         counter = parseInt(added_product.querySelector('.products-count').textContent);
            //         counter++;
            //         sum = counter * prices_num;
            //         sum = sum.toFixed(2);
            //         added_product.querySelector('.products-count').innerHTML = counter;
            //         added_product.querySelector('.prd-unit').innerHTML = counter;
            //         added_product.querySelector('.sum').innerHTML = sum;
            //         document.querySelectorAll('.price-sums').forEach(element =>
            //             element.innerHTML = all_sum);
            //     }

            //     return false;
            // }

            // all_sum = parseInt(all_sum) + parseInt(sum);
            // document.querySelectorAll('.price-sums').forEach(element =>
            //     element.innerHTML = all_sum);

            var cart_element = all_parent.querySelector('.price-button')

            if (!cart_element.classList.contains('parent-of-cart')) {

                let card_products = document.querySelector('#card_products');
                let card_div_1 = document.createElement('div');

                card_products.appendChild(card_div_1);
                card_div_1.classList.add('card_div_1', 'card');
                card_div_1.setAttribute('card_title', product_name);
                card_div_1.setAttribute('card_title1', product_name);
                let card_div_2 = document.createElement('div');
                card_div_2.classList.add('card_div_2', 'row', 'no-glutters');
                card_div_1.appendChild(card_div_2);
                let card_div_3 = document.createElement('div');
                card_div_2.appendChild(card_div_3);
                card_div_3.classList.add('card_div_3', 'col-md-12', 'd-flex', 'w-100');


                // -----------------------------------
                let card_div_4 = document.createElement('div');
                card_div_3.appendChild(card_div_4);
                card_div_4.classList.add('card_div_4', 'col-md-8', 'd-flex', 'justify-content-around');
                let div_4_child = document.createElement('div');
                div_4_child.classList.add('counters-class');
                let div_4_child_2 = document.createElement('span');
                div_4_child_2.classList.add('plus-btn');
                div_4_child_2.innerText = "+";
                let div_4_child_3 = document.createElement('span');
                div_4_child_3.classList.add('products-count');
                div_4_child_3.innerText = `${counter}`;
                let div_4_child_4 = document.createElement('span');
                div_4_child_4.classList.add('minus-btn');
                div_4_child_4.innerText = "-";
                card_div_4.appendChild(div_4_child);
                div_4_child.appendChild(div_4_child_2);
                div_4_child.appendChild(div_4_child_3);
                div_4_child.appendChild(div_4_child_4);
                let div_4_child_img = document.createElement('img');
                div_4_child_img.classList.add('card-img');
                div_4_child_img.setAttribute('src', card_image);
                card_div_4.appendChild(div_4_child_img);


                // ----------------------------------------------
                let div_center = document.createElement('div');
                card_div_4.appendChild(div_center);
                let h_6 = document.createElement('h6');
                h_6.classList.add('card-title');
                h_6.innerHTML = `${product_name}`;
                div_center.appendChild(h_6);
                let center_div_p1 = document.createElement('p');
                center_div_p1.classList.add('card-text');
                center_div_p1.innerText = `$${prices_num}`;
                div_center.appendChild(center_div_p1);
                let center_div_p2 = document.createElement('p');
                center_div_p2.classList.add('center_div_p2');
                div_center.appendChild(center_div_p2);
                // center_div_p2.innerText = `X ${product_unit}`;
                let center_div_p2_span = document.createElement('span');
                center_div_p2_span.classList.add('prd-unit');
                center_div_p2_span.innerText = counter;
                center_div_p2.appendChild(center_div_p2_span);
                let center_div_p2_span2 = document.createElement('span');
                center_div_p2_span2.classList.add("center_div_p2_span2");
                center_div_p2.appendChild(center_div_p2_span2)
                center_div_p2_span2.innerText = `X ${product_unit}`;


                // ---------------------------------

                let end_div = document.createElement('div');
                card_div_3.appendChild(end_div);
                end_div.classList.add("col-md-4", "d-flex", "align-items-center", "justify-content-center");
                let end_div_div = document.createElement('div');
                end_div.appendChild(end_div_div);
                end_div_div.classList.add("card-body", "d-flex", "align-items-center", "justify-content-center", "p-0");
                let end_div_div_p = document.createElement('p');
                end_div_div_p.classList.add("d-flex", "justify-content-between");
                end_div_div.appendChild(end_div_div_p);
                let end_div_div_span = document.createElement('span');
                end_div_div_p.appendChild(end_div_div_span);
                end_div_div_span.classList.add('end_div_div_span');
                end_div_div_span.innerText = "$";
                let end_div_div_span_2 = document.createElement('span');
                end_div_div_p.appendChild(end_div_div_span_2);
                end_div_div_span_2.classList.add('sum');
                end_div_div_span_2.innerText = `${sum}`;
                let last_span = document.createElement('span');
                last_span.classList.add('product-x');
                last_span.innerHTML = '<svg style="color:#bfbfbf" xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>';
                end_div_div_p.appendChild(last_span);

                last_span.addEventListener('click', function (event) {
                    removeItem();
                })

                function removeItem() {
                    let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                    let minus_sum = parent[0].querySelector('.sum').textContent;
                    parent[0].remove();

                    let summary = document.querySelector('.price-sums').textContent;
                    summary = parseInt(summary) - parseInt(minus_sum);
                    document.querySelectorAll('.price-sums').forEach(element =>
                        element.innerText = summary);
                    leng = document.querySelector('#card_products').children.length;
                    document.querySelectorAll('.item-count').forEach(element =>
                        element.innerHTML = leng);
                }

                function addItem(x) {
                    let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                    all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                    all_sum_plus = parseInt(all_sum_plus) + parseInt(prices_num);
                    counter++;
                    parent.forEach((element) => {
                        element.querySelectorAll('.products-count').forEach((element) => {
                            element.innerHTML = counter;
                        })
                    })

                    card_div_1.querySelector('.prd-unit').innerHTML = counter;
                    prod_sum = counter * prices_num;
                    prod_sum = prod_sum.toFixed(2);
                    card_div_1.querySelector('.sum').innerHTML = prod_sum;
                    document.querySelectorAll('.price-sums').forEach(element =>
                        element.innerHTML = all_sum_plus);
                }


                let prod_sum = 1 * parseInt(prices_num);
                let all_sum_plus = 0;
                all_sum_plus = all_sum_plus + prod_sum;
                all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                div_4_child_2.addEventListener('click', function (event) {
                    addItem(this);

                })


                function minusItem(x) {
                    let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                    all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                    all_sum_plus = parseInt(all_sum_plus) - parseInt(prices_num);
                    counter = parseInt(parent[0].querySelector('.products-count').textContent);
                    counter--;
                    if (counter == 0) {
                        //    parent[1].querySelector('.clone_card').classList.add('d-none');
                        //    parent[1].querySelector('.price-button').classList.remove('d-none');
                        // card_div_1.remove();
                        // leng = document.querySelector('#card_products').children.length;
                        // document.querySelectorAll('.item-count').forEach(element =>
                        //     element.innerHTML = leng);
                        removeItem();
                    }
                    parent.forEach((element) => {
                        element.querySelectorAll('.products-count').forEach((element) => {
                            element.innerHTML = counter;
                        })
                    })
                    card_div_1.querySelector('.products-count').innerHTML = counter;
                    card_div_1.querySelector('.prd-unit').innerHTML = counter;
                    prod_sum = counter * prices_num;
                    prod_sum = prod_sum.toFixed(2);
                    card_div_1.querySelector('.sum').innerHTML = prod_sum;
                    document.querySelectorAll('.price-sums').forEach(element =>
                        element.innerHTML = all_sum_plus);
                    console.log(parent[1]);


                }
                div_4_child_4.addEventListener('click', function (event) {
                    minusItem(this);
                })

                var leng = document.querySelector('#card_products').children.length;


                var clone_card_parent = card_parent.querySelector('.price')
                var es = Array.from(clone_card_parent.querySelectorAll('.clone_card'))


                // if (es.length === 0) {
                // let new_card_parent = parent_of_cart.parentElement;
                // parent_of_cart.classList.add('d-none');
                // let new_card = document.createElement('div');
                // new_card_parent.appendChild(new_card);
                // new_card.classList.add("clone_card");
                // let clone_of_minus = div_4_child_4.cloneNode(true);
                // clone_of_minus.classList.add('clone_of_minus', 'clones');
                // let clone_of_plus = div_4_child_2.cloneNode(true);
                // clone_of_plus.classList.add('clone_of_plus', 'clones');
                // let clone_of_count = div_4_child_3.cloneNode(true);
                // clone_of_count.classList.add('clone_of_count', 'clones');
                // new_card.appendChild(clone_of_minus);
                // new_card.appendChild(clone_of_count);
                // new_card.appendChild(clone_of_plus);

                cart_element.innerHTML = "";
                let clone_of_minus = div_4_child_4.cloneNode(true);
                let clone_of_plus = div_4_child_2.cloneNode(true);
                let clone_of_count = div_4_child_3.cloneNode(true);
                parent_of_cart.appendChild(clone_of_minus);
                parent_of_cart.appendChild(clone_of_count);
                parent_of_cart.appendChild(clone_of_plus);
                parent_of_cart.classList.add('parent-of-cart', 'add_to_cart');

                clone_of_minus.addEventListener('click', function () {
                    minusItem(this);

                })
                clone_of_plus.addEventListener('click', function () {
                    addItem(this);

                })

                // }
                // document.querySelector('.btn-card-inModal').addEventListener('click', function(){

                //         let btnInModal = document.querySelector('.btn-card-inModal');
                //         btnInModal.classList.add('d-none');


                // });

            }

            // document.querySelectorAll('.item-count').forEach(element =>
            //     element.innerHTML = leng);

            leng = document.querySelector('#card_products').children;
            document.querySelectorAll('.item-count').forEach(element =>
                element.innerHTML = leng.length);

            totalSum = 0;
            Array.from(leng).forEach(element => {
                let sum = element.querySelector('.sum').textContent
                totalSum += parseInt(sum)
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerHTML = totalSum);
            });
        } else {
            document.getElementsByClassName('card-modal-btn')[0].click();
            let card_img = this.querySelector('.cards_imgs').getAttribute('src');
            document.querySelector('.modal-main-img').setAttribute('src', card_img);
            document.querySelectorAll('.thumb_img').forEach(element =>
                element.setAttribute('src', card_img));
            let product_name = this.querySelector('.product_name>b').textContent;
            document.querySelector('.product-title').innerText = product_name;
            let prdct_unit = this.querySelector('.product-unit').textContent;
            document.querySelector('.unit-place').innerText = prdct_unit;
            let prdct_price = this.querySelector('.price-number').textContent;

            document.querySelector('.price-place').innerText = prdct_price;

        }


    })

}
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.extra-menu').classList.toggle('show');
})







