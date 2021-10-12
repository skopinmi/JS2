
function basketVisible() {
    table.style.display = 'block';
    basketRender();
}

function basketInvisible() {
    table.style.display = 'none';
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




