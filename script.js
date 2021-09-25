'use strict'
const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
 // GoodsList метод, определяющий суммарную стоимость всех товаров 
  culculateTotalGoodsListPrice() {
    this.goodsListPrice = 0;
    this.goods.forEach(good => this.goodsListPrice += good.price)
  }
}
// классы для Корзины товаров и Элемента корзины товаров
// с примерными методами (реализации методов в задании не было -  пока как эксперимент, смотрел как будет работать)
//
class Item {
  constructor(good) {
    this.good = good;
    this.count = 1;
    this.culculateItemPrice();
  }
  addOne() {
    this.count ++;
    this.culculateItemPrice();
  }
  removeOne() {
    this.count --;
    this.culculateItemPrice();
  }
  culculateItemPrice() {
    this.itemPrice = this.count * this.good.price;
  }
}

class Basket {
  constructor(){
    this.itemsList = [];
    this.basketPrice = 0;
  }
  addItem(item) {
    this.itemsList.push(item);
    this.culculateBasketPrice()
  }
  removeItem(item){
    this.itemsList.pop(this.itemsList.indexOf(item));
    this.culculateBasketPrice()
  }
  culculateBasketPrice() {
    this.basketPrice = 0;
    this.itemsList.forEach(item => this.basketPrice +=  item.itemPrice);
  }
}


const list = new GoodsList();
list.fetchGoods();
list.render();

