<template>
  <div class="home">
    <h1 class="logo">Каталог</h1>
    <div class="catalog">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />

    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'MainPage',
  components: {
    CatalogItem
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_JSON',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      console.log('add')
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_JSON()
  }
}
</script>

<style>
.home {
   /* min-height: 90vh;
   display: flex;
   flex-direction: column;
   max-width: 900px;
   margin: 0 auto; */
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
 }

 .logo {
  margin-bottom: 10px;
 }

 .catalog {
  display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
 }
</style>