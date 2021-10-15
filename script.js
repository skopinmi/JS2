'use strict'

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

Vue.component('header-component', {
  template: `
    <div class="header-component"> 
      <goods-search></goods-search>
      <cart></cart>
    </div>
  `
});

Vue.component('goods-search', {
  props: ['goods'],
  date() {
    return {
      searchLine: ''
    }
  },
  template: `
    <div class="search">
      <input type="text" class="goods-search" v-model="searchLine"/>
      <button class="search-button" type="button" v-on:click=filterGoods()>Искать</button>  
    </div>`,
  data() {
    return {
      searchLine: '',
    }
  },  
  methods: {
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.$root.filteredGoods = this.$root.goods.filter(good => regexp.test(good.product_name));
    }
  } 
});

Vue.component('cart', {
  data() {
    return {
      totalPrice: 'не работает',
      isVisible: false
    }
  },
  template: `
    <div class="cart">
      <button class="cart-button" type="button" v-on:click=changeVisible()>Корзина</button>
      <div  v-show="isVisible">
        <table>
          <thead>
            <tr>
              <th>Название товара</th>
              <th>Количество</th>
              <th>Цена за шт.</th>
              <th>Итого</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in $root.goodsInCart">
              <td>{{item.product.product_name}}</td>
              <td>{{item.count}}</td>
              <td>{{item.product.price}}</td>
              <td>{{item.count * item.product.price}}</td>
              <td><button type="button" v-on:click=$root.deleteFromCart(item.product)>-</button></td>
            </tr>
          </tbody>
        </table>
        <table class="totalprice">
          <tr>
              <th>Товаров в корзине на сумму:</th>
              <th id="total">{{totalPrice}}</th>
          </tr>
        </table>
      </div>
    </div>  
  `,
  methods: {
    changeVisible(){
      this.isVisible = this.isVisible == false;
    }
  }
});

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
  `
});

Vue.component('goods-item', {
  props: ['good'],
  template: `
    <div class="goods-item">
      <h3>{{ good.product_name }}</h3>
      <p>{{ good.price }}</p>
      <button id ="addToCart" v-on:click="$root.addToCart(good)" >Add to Cart</button></div>
    </div>
  `
});




