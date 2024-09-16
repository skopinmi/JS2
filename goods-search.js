let goodsSearch = {
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
  };

export default {
    goodsSearch: goodsSearch
}