var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (event) {
        var clicked_element = event.target;
        if (clicked_element.closest('.add_to_cart') != null) {
            var button = clicked_element.closest('.add_to_cart');
            var parent_of_cart = button.parentElement;
            var test_parent = button.closest('.card');
            var fixed_price = test_parent.querySelector('.price-number').textContent.replace('$', '');

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
            var added_product = document.querySelector(`[card_title="${product_name}"]`);
            var all_sum = 0;
            all_sum = parseInt(document.querySelector('.price-sums').textContent);

            
            if (added_product&&!parent_of_cart) {
                all_sum = parseInt(document.querySelector('.price-sums').textContent);
                all_sum = parseInt(all_sum) + parseInt(sum);
                counter = parseInt(added_product.querySelector('.products-count').textContent);
                counter++;
                sum = counter * prices_num;
                sum = sum.toFixed(2);
                added_product.querySelector('.products-count').innerHTML = counter;
                added_product.querySelector('.prd-unit').innerHTML = counter;
                added_product.querySelector('.sum').innerHTML = sum;
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerHTML = all_sum);

                return false;
            }

            all_sum = parseInt(all_sum) + parseInt(sum);
            document.querySelectorAll('.price-sums').forEach(element =>
                element.innerHTML = all_sum);


                
        let card_products = document.querySelector('#card_products');
        let card_div_1 = document.createElement('div');
        
        card_products.appendChild(card_div_1);
        card_div_1.classList.add('card_div_1', 'card');
        card_div_1.setAttribute('card_title', product_name);
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
        div_4_child_2.innerText="+";
        let div_4_child_3 = document.createElement('span');
        div_4_child_3.classList.add('products-count');
        div_4_child_3.innerText=`${counter}`;
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
        center_div_p1.innerText= `$${prices_num}`;
        div_center.appendChild(center_div_p1);
        let center_div_p2 = document.createElement('p');
        center_div_p2.classList.add('center_div_p2');
        div_center.appendChild(center_div_p2);
        // center_div_p2.innerText = `X ${product_unit}`;
        let center_div_p2_span = document.createElement('span');
        center_div_p2_span.classList.add('prd-unit');
        center_div_p2_span.innerText = counter;
        center_div_p2.appendChild(center_div_p2_span);
        let  center_div_p2_span2 = document.createElement('span');
        center_div_p2_span2.classList.add("center_div_p2_span2");
        center_div_p2.appendChild(center_div_p2_span2)
        center_div_p2_span2.innerText =`X ${product_unit}`;


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


        function removeItem(x){
            var parent = x.closest('.card');
            let minus_sum = parent.querySelector('.sum').textContent;
            console.log(minus_sum);
            card_div_1.remove();
            let summary = document.querySelector('.price-sums').textContent;
            summary = parseInt(summary) - parseInt(minus_sum);
            document.querySelectorAll('.price-sums').forEach(element=>
                element.innerText = summary);
            leng = document.querySelector('#card_products').children.length;
            document.querySelectorAll('.item-count').forEach(element =>
                element.innerHTML = leng);
        }

        function addItem(){
            all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                all_sum_plus = parseInt(all_sum_plus)+parseInt(prices_num);
                counter = parseInt(card_div_1.querySelector('.products-count').textContent);
                counter++;
                card_div_1.querySelector('.products-count').innerHTML = counter;
                card_div_1.querySelector('.prd-unit').innerHTML = counter;
                prod_sum = counter * prices_num;
                prod_sum = prod_sum.toFixed(2);
                card_div_1.querySelector('.sum').innerHTML = prod_sum;
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerHTML = all_sum_plus);
        }
        last_span.addEventListener('click', function(event){
            removeItem(this);
        })

        let prod_sum = 1 * parseInt(prices_num);
        let all_sum_plus = 0;
        all_sum_plus= all_sum_plus + prod_sum;
        all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
            div_4_child_2.addEventListener('click', function (event) {
                addItem();

            })
            
            div_4_child_4.addEventListener('click', function (event) {
                all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                all_sum_plus = parseInt(all_sum_plus)-parseInt(prices_num);
                counter = parseInt(card_div_1.querySelector('.products-count').textContent);
                counter--;
                if(counter==0){
                    // card_div_1.remove();
                    // leng = document.querySelector('#card_products').children.length;
                    // document.querySelectorAll('.item-count').forEach(element =>
                    //     element.innerHTML = leng);
                    removeItem(this);
                }
                card_div_1.querySelector('.products-count').innerHTML = counter;
                card_div_1.querySelector('.prd-unit').innerHTML = counter;
                prod_sum = counter * prices_num;
                prod_sum = prod_sum.toFixed(2);
                card_div_1.querySelector('.sum').innerHTML = prod_sum;
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerHTML = all_sum_plus);
            })

            // document.getElementById('card_products').innerHTML += `<div class="card card_div_1 mb-3" card_title="${product_name}">
            //     <div class="row no-gutters card_div_2">
            //     <div class="col-md-12 d-flex w-100 card_div_3" style="border-top:1px solid rgb(198, 198, 198)">
            //         <div class="col-md-8 d-flex justify-content-around ">
            //             <div class="counters-class">
            //             <span class="plus-btn">+</span>
            //             <span class="products-count">${counter}</span>
            //             <span class="minus-btn">-</span>
            //             </div>
            //             <img src="${card_image}" class="card-img" alt="...">
            //             <div>
            //                 <h6 class="card-title">${product_name}</h6>
            //                 <p class="card-text" style ="font-size:14px;color:#009e7f;font-weight:bold;">$${prices_num}</p>
            //                 <p class="" style="font-size:10px; color:rgb(121, 121, 121)"><span class="prd-unit" style="color:rgb(121, 121, 121)">${counter}</span> X ${product_unit}</p>
            //             </div>
            //         </div>
            //         <div class="col-md-4 d-flex align-items-center justify-content-center">
            //             <div class="card-body d-flex align-items-center justify-content-center p-0">  
            //                <p class="d-flex justify-content-between " >
            //                <span style="font-weight:bold; font-size:15px; margin-top:5px">$</span> 
            //                <span class="sum" style = "font-weight:bold;font-size:15px;margin-top:5px" >${sum}</span>
            //                <span class = "product-x"><svg style="color:#bfbfbf" xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg></span>
            //                </p>
            //             </div>
            //         </div>
            //     </div>
            //     </div>
            //     </div>`;
            var leng = document.querySelector('#card_products').children.length;
            if(!clicked_element.classList.contains('parent-of-cart')){
                parent_of_cart.innerHTML = "";
                console.log('asd');
                console.log(parent_of_cart.classList.contains('price'));
                console.log(parent_of_cart);
                let clone_of_minus = div_4_child_4.cloneNode(true);
                let clone_of_plus = div_4_child_2.cloneNode(true);
                let clone_of_count = div_4_child_3.cloneNode(true);
                parent_of_cart.appendChild(clone_of_minus);
                parent_of_cart.appendChild(clone_of_count);
                parent_of_cart.appendChild(clone_of_plus);
                parent_of_cart.classList.add('parent-of-cart','add_to_cart');
        }
            

            document.querySelectorAll('.item-count').forEach(element =>
                element.innerHTML = leng);
        } else {
            document.getElementsByClassName('card-modal-btn')[0].click();
            let card_img = this.querySelector('.cards_imgs').getAttribute('src');
            document.querySelector('.modal-main-img').setAttribute('src',card_img);
            document.querySelectorAll('.thumb_img').forEach(element=>
                element.setAttribute('src',card_img));
            let product_name = this.querySelector('.product_name>b').textContent;
            document.querySelector('.product-title').innerText = product_name;
            let prdct_unit = this.querySelector('.product-unit').textContent;
            document.querySelector('.unit-place').innerText = prdct_unit;
            let prdct_price = this.querySelector('.price-number').textContent;
            console.log(prdct_price);
            document.querySelector('.price-place').innerText = prdct_price;
        }


    })

}
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.extra-menu').classList.toggle('show');
})







