let products = Array.from(document.querySelectorAll('.product'));
let control = Array.from(document.querySelectorAll('.product__quantity-controls'));

control.forEach(elem => {
    let dec = elem.querySelector('.product__quantity-control_dec');
    let inc = elem.querySelector('.product__quantity-control_inc');
    let total = elem.querySelector('.product__quantity-value');

    inc.addEventListener('click', () => {
        total.textContent = Number(total.textContent) +1;
    })
    
    dec.addEventListener('click', () => {
        if ( total.textContent > 1) {
            total.textContent = Number(total.textContent) - 1;
        }
    })
})

products.forEach(product => {
    let productAdd = product.querySelector('.product__add');
    let id = product.dataset.id;
    let image = product.querySelector('.product__image').getAttribute('src');
    let productTotal = product.querySelector('.product__quantity-value');

    productAdd.addEventListener('click', () => {
        let cart = Array.from(document.querySelectorAll('.cart__product'));
        let sameProduct = cart.find(e => e.getAttribute('data-id') === id);

        if (!sameProduct) {
            let allInCart = document.querySelector('.cart__products');
            allInCart.insertAdjacentHTML('beforeEnd', `
                <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">${productTotal.textContent}</div>
            </div>`)
        } else {
            let totalInCartElement = sameProduct.querySelector('.cart__product-count');
            let currentTotalInCart = Number(totalInCartElement.textContent);
            let addedQuantity = Number(productTotal.textContent);


            totalInCartElement.textContent = currentTotalInCart + addedQuantity;
        }
    })
})