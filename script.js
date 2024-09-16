'use strict'

import cart  from './cart';
import goodsSearch  from './goods-search';
import goodsItem from './goods-item';
import goodsList from './goods-list';
import headerComponent from './header-component';

Vue.component('cart', cart.cart);
Vue.component('goods-search', goodsSearch.goodsSearch);
Vue.component('goods-item', goodsItem.goodsItem);
Vue.component('goods-list', goodsList.goodsList);
Vue.component('header-component', headerComponent.headerComponent);

const postResponse = async (url, data) => {
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

const API_URL = 'http://localhost:3000';
// 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        
const app = new Vue({
  el: '#vue',
  data: {
    goods: [],
    filteredGoods: [],
    goodsInCart: [],
    totalPrice: 0,
  },
  methods: {
    makeGETRequest(url) {
      return new Promise((resolve) => {
        var xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      }
      xhr.open('GET', url, true);
      xhr.send();
      }
    )},

    addToCart(good) {
      const item = {product: good, count: 1};
      postResponse('/addToCart', item).then((result) => {
        console.log(result);
      });
      this.upDateCart();
    },

    deleteFromCart(good) {
      postResponse('/deleteFromCart', good).then((result) => {
        console.log(result);
      });
      this.upDateCart();
    },

    upDateCart(){
      this.makeGETRequest(`${API_URL}/cart`).then( (goods) => {
        this.goodsInCart = JSON.parse(goods);
      });
    }
  },

  mounted() {
    this.makeGETRequest(`${API_URL}/catalog`).then( (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
    this.upDateCart();
  }
});