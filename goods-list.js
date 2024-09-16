let goodsList = {
    props: ['goods'],
    template: `
      <div class="goods-list">
        <goods-item v-for="good in goods" :good="good"></goods-item>
      </div>
    `
};

export default {
    goodsList: goodsList
}