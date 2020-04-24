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

            // for (var i = 0; i < big_parent.children.length; i++) {
            //     if (big_parent.children[i].className == 'price-number') {
            //         var product_price = big_parent.children[i].innerHTML;
            //     }
            // }
            var product_price = big_parent.querySelector('.fix-price').textContent;
            var prices_num= parseInt(product_price);
            // for (var i = 0; i < all_parent.children.length; i++) {
            //     if (all_parent.children[i].className == 'product_name') {
            //         var product_name = all_parent.children[i].innerHTML;
            //     }
            // }
            var product_name = all_parent.querySelector('.product_name>b').textContent;
            var product_unit = all_parent.querySelector('.product_name>span').textContent;
            var counter = 1;
            var sum = 1 * prices_num;
            sum = sum.toFixed(2);
            var added_product = document.querySelector(`[card_title="${product_name}"]`);
            var all_sum = 0;
            all_sum = parseInt(document.querySelector('.price-sums').textContent);
            
            if(added_product){
                document.querySelector('.plus-btn').addEventListener('click', function(event){
                    var clicked = event.target;
                    console.log(clicked);
                    counter = parseInt(added_product.querySelector('.products-count').textContent);
                    counter++;
                    console.log(counter);
                    added_product.querySelector('.products-count').innerHTML = counter;
                    added_product.querySelector('.prd-unit').innerHTML = counter;
                    })
                document.querySelector('.minus-btn').addEventListener('click', function(event){
                    counter = parseInt(added_product.querySelector('.products-count').textContent);
                    counter--;
                    console.log(counter);
                    added_product.querySelector('.products-count').innerHTML = counter;
                    added_product.querySelector('.prd-unit').innerHTML = counter;
                    })
                }
            if (added_product) {
                all_sum = parseInt(document.querySelector('.price-sums').textContent);
                all_sum = parseInt(all_sum) + parseInt(sum);
                counter = parseInt(added_product.querySelector('.products-count').textContent);
                counter++;
                sum = counter * prices_num;
                sum = sum.toFixed(2);
                added_product.querySelector('.products-count').innerHTML = counter;
                added_product.querySelector('.prd-unit').innerHTML = counter;
                added_product.querySelector('.sum').innerHTML = sum;
                document.querySelectorAll('.price-sums').forEach(element=>
                    element.innerHTML = all_sum);
                    
                return false;
            }
                    
            all_sum = parseInt(all_sum) + parseInt(sum);
            document.querySelectorAll('.price-sums').forEach(element=>
                element.innerHTML = all_sum);

                
            
            // for(var i=0; i<added_products.length;i++){
            //     if(added_products[i].getAttribute('card_title')== product_name){
            //         counter = parseInt(added_products[i].querySelector('.products-count').textContent);
            //         counter++;
            //         added_products[i].querySelector('.products-count').innerHTML = counter;
            //         return false;
            //     }
            // }



            document.getElementById('card_products').innerHTML += `<div class="card mb-3" card_title="${product_name}" style="max-width: 540px;">
                <div class="row no-gutters ">
                <div class="col-md-12 d-flex w-100" style="border-top:1px solid rgb(198, 198, 198)">
                    <div class="col-md-8 d-flex justify-content-around">
                        <div class="counters-class">
                        <span class="plus-btn">+</span>
                        <span class="products-count">${counter}</span>
                        <span class="minus-btn">-</span>
                        </div>
                        <img src="${card_image}" class="card-img" alt="...">
                        <div>
                            <h6 class="card-title">${product_name}</h6>
                            <p class="card-text" style ="font-size:14px;color:#009e7f;font-weight:bold;">$${prices_num}</p>
                            <p class="" style="font-size:10px; color:rgb(121, 121, 121)"><span class="prd-unit" style="color:rgb(121, 121, 121)">${counter}</span> X ${product_unit}</p>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex align-items-center justify-content-center">
                        <div class="card-body d-flex align-items-center justify-content-center p-0">  
                           <p class="d-flex justify-content-between " >
                           <span style="font-weight:bold; font-size:15px; margin-top:5px">$</span> 
                           <span class="sum" style = "font-weight:bold;font-size:15px;margin-top:5px" >${sum}</span>
                           <span class = "product-x"><svg style="color:#bfbfbf" xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg></span>
                           </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>`;
                var leng = document.querySelector('#card_products').children.length;
                console.log(document.querySelector('#card_products').children);
                    console.log(leng);


                    
                document.querySelectorAll('.item-count').forEach(element =>
                    element.innerHTML = leng);
        } else {
            document.getElementsByClassName('card-modal-btn')[0].click();
        }
      

    })
    
}
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.extra-menu').classList.toggle('show');
})
