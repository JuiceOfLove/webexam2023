<template>
  <div class="home">
    <div class="catalog__top">
      <h1 class="logo">Каталог</h1>
       <span @click="sortByName" class="a-table__header-title">Name<i class='bx bx-move-vertical'></i></span>
       <span @click="sortByCost" class="a-table__header-title">Cost<i class='bx bx-move-vertical'></i></span>
       <div class="search-field">
      <input
          type="text"
          v-model="searchValue"
      >
        <i class="bx bx-search-alt-2" @click="search(searchValue)"></i>
        <i class='bx bx-x' @click="clearSearchField"></i>
    </div>
    </div>
    <div class="catalog">
      <CatalogItem
        v-for="product in filteredProducts"
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
  data() {
    return {
        sortedProducts: [],
        countForCost: 1,
        countForName: 1,
        searchValue: '',
        sortedProducts: [],
      }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'SEARCH_VALUE'
    ]),
    filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_JSON',
      'ADD_TO_CART',
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),

    search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
      },
      clearSearchField() {
        this.searchValue = ''
        this.GET_SEARCH_VALUE_TO_VUEX();
      },

    addToCart(data) {
      console.log('add')
      this.ADD_TO_CART(data)
    },
    sortByCost() {
      if (this.countForCost == 1) {
         this.filteredProducts.sort((a,b) => a.price - b.price);
         this.countForCost = 2;
      } else {
        this.filteredProducts.reverse();
        this.countForCost = 1;
      }

    },
    sortByName() {
      if (this.countForName == 1) {
        this.filteredProducts.sort((a,b) => a.name.localeCompare(b.name));
        this.countForName = 2;
      }else {
        this.filteredProducts.reverse();
        this.countForName = 1;
      }

    },
    sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      }

  },
  watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
  mounted() {
    this.GET_PRODUCTS_FROM_JSON()
    .then((response) => {
          if (response.data) {
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
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

.catalog__top {
  width: 90%;
}

 .logo {
  margin-bottom: 10px;
  text-align: center;
 }

 .catalog {
  display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
 }

</style>