<template>
  <div class="catalog-item">
    <img class="catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="img">
    <p class="catalog-item__name">{{product_data.name}}</p>
    <p class="catalog-item__price">Price: {{product_data.price}} ₽</p>
    <br>
    <button class="catalog-item__add_to_cart_btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
        sendData() {
            this.$emit('send', this.product_data.article)
        },
        addToCart() {
            this.$emit('addToCart', this.product_data);
      }
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
}
</script>

<style>
.catalog-item {
    display: flex;
    /* margin: 0 auto; */
    align-items: center;
    gap: 1.5rem;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 340px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
}

.catalog-item__image {
    height: 125px;
}
</style>