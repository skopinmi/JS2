let goodsItem =  {
    props: ['good'],
    template: `
      <div class="goods-item">
        <h3>{{ good.product_name }}</h3>
        <p>{{ good.price }}</p>
        <button id ="addToCart" v-on:click="$root.addToCart(good)" >Add to Cart</button></div>
      </div>
    `
};

export default {
    goodsItem: goodsItem
}