'use strict';
let basket = [];
let basketEl = document.querySelector('.cart-button');
let table = document.querySelector('.basket');
let tableHTML = '<table class="table"><tr> <th>Название товара</th>'+
'<th>Количество</th><th>Цена за шт.</th><th>Итого</th></tr></table>'
let totalPrice = 0;

function activateAddToCart () {
    let btnsAddToBasket = document.querySelectorAll('button#addToCart');
    console.log(btnsAddToBasket);
    btnsAddToBasket.forEach(function (btn) {
        btn.addEventListener('click', addToBasket);
    }); 
}

function basketVisible() {
    table.style.display = 'block';
    basketRender();
}

function basketInvisible() {
    table.style.display = 'none';
}

function addToBasket(event) {
    // let productName = event.currentTarget.getAttribute("data-product-name");
    // let productPrice = event.currentTarget.getAttribute("data-product-price");
    let good = event.currentTarget.getAttribute("data-product").json();
    console.log(good);
    // let good = {
    //     "product_name": productName,
    //     "price": productPrice,
    // }
    // console.log(good.product_name);
    // if (!(good in basket)){
    //     basket.push({good: good, count: 1});
    // } 
    // basketRender();
}

function basketRender() {
    let dataHTML = "";
    for(let product in basket) {
        dataHTML  += renderOneItems(product);
    }
    let totalPriceHTML = `
    <table class="totalprice">
        <tr>
            <th>Товаров в корзине на сумму:</th>
            <th id="total">${totalPrice}</th>
        </tr>
    </table>`
    table.innerHTML = tableHTML + dataHTML + totalPriceHTML ;
}

function renderOneItems(good) {
    return `<tr>
    <td>${good.product_name}</td>
    <td>количество</td><td>${good.price}</td>
    <td>Общая цена</td></tr>`;
}

basketEl.addEventListener('mouseenter', basketVisible);
basketEl.addEventListener('mouseleave', basketInvisible);




