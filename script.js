const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
  let xhr;

  const promise = () => {
    return new Promise((resolve) => {
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }  
    });
  }

  function resolve() {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

  promise().then(resolve());
}

class Item {
  constructor(good) {
    this.good = good;
    this.count = 1;
  }
  addOne() {
    this.count ++;
  }
  removeOne() {
    this.count --;
  }
  render(){
    return `<div class="basket-item"><h3>name: ${this.product_name} 
    price: ${this.price}  count: ${this.count}</h3></div>`;
  }
}

class Basket {
  constructor(){
    this.itemsList = [];
    this.basketPrice = 0;
  }
  addItem(item) {
    this.itemsList.push(item);
  }
  removeItem(item){
    this.itemsList.pop(this.itemsList.indexOf(item));
  }

  render() { 
    let basketHtml = '';
    this.itemsList.forEach(element => {
      const item = new Item(element);
      basketHtml += item.render();
    });
    document.querySelector('.basket-list').innerHTML = listHtml;
  }
}

class GoodsItem {
  constructor (product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}


// Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, 
// а render() вызывался в обработчике этого промиса.
// 
// вроде соответствует заданию, работает, но чувство, что что-то не так...
class GoodsList {
  constructor(){
    this.fetchGoods().then((goods) => {this.render(goods);}, (error) => {console.log('something wrong');});
  }
  
  fetchGoods() {
    return new Promise((resolve) => {
      makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      resolve(JSON.parse(goods));
      })    
    });
  }
  render(goods) {
    let listHtml = '';
    goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

}

let list = new GoodsList();


