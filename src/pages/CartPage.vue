<template>
  <div class="cart">
    <div class="cart__top">
      <h1>Корзина</h1>
      <p v-if="!CART.length">В корзине нет товаров...</p>
    </div>
    <CartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <span class="total__name">Всего: {{cartTotalCost}} ₽</span>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'

    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  },
   computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCost() {
        let result = []

        if (this.CART.length) {
          for (let item of this.CART) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
   }
}
</script>

<style>
.cart__total{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  background: #26ae68;
}

.cart__top {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.total__name {
  margin-right: 16px;
  color: #fff;
}
</style>