'use strict'
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        
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
      if (!(good.id_product in this.goodsInCart)){
        this.goodsInCart[good.id_product] = {product: good, count: 1};
      }else {
        this.goodsInCart[good.id_product].count += 1;
      }
      console.log(this.goodsInCart);
    },
  },

  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`).then( (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
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
      totalPrice: 'не работает'
    }
  },
  template: `
    <div class="cart">
      <button class="cart-button" type="button" >Корзина</button>
      
    </div>  
  `
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




