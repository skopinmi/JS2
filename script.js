'use strict'
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        
const app = new Vue({
  el: '#vue',
  data: {
    goods: [],
    filteredGoods: [],
    basket: [],
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
    addToBasket(good) {
      if (!(good.id_product in this.basket)){
          this.basket[good.id_product] = {product: good, count: 1};
      }else {
          this.basket[good.id_product].count += 1;
      }
      console.log(this.basket);
    }
  },
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`).then( (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
  }
});

Vue.component('goods-search', {
  props: ['goods'],
  template: `
    <div> 
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
      console.log(this.searchLine);
      this.$root.filteredGoods = this.$root.goods.filter(good => regexp.test(good.product_name));
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
      <button id ="addToCart" v-on:click="this.addToBasket(good)" >Add to Cart</button></div>
    </div>
  `
});




