<template>
  <div class="catalog-item">
    <Popup
      v-if="isInfoPopupVisible"
      rightBtnTitle="Add to cart"
      :popupTitle="product_data.name"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"

    >
        <div class="popup__inner">
            <img class="catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="img">
            <div>
                <p class="catalog-item__name">{{product_data.name}}</p>
                <p class="catalog-item__price">Price: {{product_data.price}} ₽</p>
                <p class="v-catalog-item__price">{{product_data.category}}</p>
            </div>
        </div>
    </Popup>
    <img class="catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="img">
    <p class="catalog-item__name">{{product_data.name}}</p>
    <p class="catalog-item__price">Price: {{product_data.price}} ₽</p>
    <br>
    <div class="item_buttons">
        <button class="catalog-item__show-info btn" @click="showPopupInfo">Показать</button>
        <button class="catalog-item__add_to_cart_btn btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import Popup from '@/components/Popup.vue'
export default {
    name: 'CatalogItem',
    components: {
        Popup
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {
          }
        }
      }
    },
    data () {
        return {
            isInfoPopupVisible: false
        }
    },
    methods: {
        sendData() {
            this.$emit('send', this.product_data.article)
        },
        addToCart() {
            this.$emit('addToCart', this.product_data);
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true;
        
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
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

.item_buttons {
    display: flex;
}

.btn {
    background-color: #fff;
    padding: 3px 7px;
    margin: 0 5px;
}

.popup__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>