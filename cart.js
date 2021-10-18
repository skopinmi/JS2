let cart = {
    data() {
      return {
        totalPrice: 'не работает',
        isVisible: false
      }
    },
    template: `
      <div class="cart">
        <button class="cart-button" type="button" v-on:click=changeVisible() v-show="isVisible">Скрыть корзину</button>
        <button class="cart-button" type="button" v-on:click=changeVisible() v-show="!isVisible">Показать корзину</button>
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
  };

  export default  {
    cart: cart
  }