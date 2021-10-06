'use strict'
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        
const app = new Vue({
  el: '#vue',
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: ''
  },
  methods: {
    makeGETRequest(url, callback) {
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
    },
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    }
  },
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      console.log(goods);
    });
  }
});



// class GoodsItem {
//   constructor (good){
//     this.product_name = good.product_name;
//     this.price = good.price;
//   }
//   render() {
//     return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p>
//     <button id ="addToCart" data-product"{'1': '${this.product_name}', '2': ${this.price}" >Add to Cart</button></div>`;
//     // <button id ="addToCart" data-product-name="${this.product_name}" data-product-price="${this.price}" >Add to Cart</button></div>`;
//   }
// }
  
// class GoodsList {
  
//   constructor() {
//     this.goods = [];
//     this.filteredGoods = [];
//   }
//   fetchGoods(cb) {
//     makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
//       this.goods = JSON.parse(goods);
//       this.filteredGoods = JSON.parse(goods);
//       cb();
//     })
//   }

//   render() {
//     let listHtml = '';
//     this.filteredGoods.forEach(good => {
//       const goodItem = new GoodsItem(good);
//       listHtml += goodItem.render();
//     });
//     document.querySelector('.goods-list').innerHTML = listHtml;
//   }

  // filterGoods(value) {
  //   const regexp = new RegExp(value, 'i');
  //   this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
  //   this.render();
  // }
// }


// const list = new GoodsList();
// let searchButton = document.querySelector('.search-button');
// let searchInput = document.querySelector('.goods-search');


// list.fetchGoods(() => {
//   list.render();
//   activateAddToCart(); // вставил сюда, иначе выполнялось до создания HTML карточек товара 
// });

// searchButton.addEventListener('click', (e) => {
//   const value = searchInput.value;
//   list.filterGoods(value);
//   activateAddToCart(); // вставил сюда, иначе выполнялось до создания HTML карточек товара 
// });



