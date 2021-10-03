'use strict'
const goodsList = document.querySelector('.goods-list');
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

class GoodsItem {
  constructor (good){
    this.product_name = good.product_name;
    this.price = good.price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p>
    <button id ="addToCart" data-product-name="${this.product_name}" data-product-price="${this.price}" >Add to Cart</button></div>`;
  }
}
  
class GoodsList {
  
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }
  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      cb();
    })
  }

  render() {
    let listHtml = '';
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    this.render();
  }
}


const list = new GoodsList();
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.goods-search');


list.fetchGoods(() => {
  list.render();
  activateAddToCart(); // вставил сюда, иначе выполнялось до создания HTML карточек товара 
});

searchButton.addEventListener('click', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
  activateAddToCart(); // вставил сюда, иначе выполнялось до создания HTML карточек товара 
});



// *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. 
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a. Имя содержит только буквы.
// b. Телефон имеет вид +7(000)000-0000.
// c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
// d. Текст произвольный.
// e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.



