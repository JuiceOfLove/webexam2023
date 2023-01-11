<template>
    <div class="cart-item">
        <img class="catalog-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">
        <div class="cart-item__info">
            <p class="cart-item__info-text">Стоимость: {{cart_item_data.name}}</p>
            <p class="cart-item__info-text">Цена: {{cart_item_data.price}}</p>
            <p class="cart-item__info-text">Номер: {{cart_item_data.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <span>Кол:</span>
            <div class="cart-item__quantity-number">
                <span class="cart-item__quantity-btn" @click="decrementItem">-</span>
                {{cart_item_data.quantity}}
                <span class="cart-item__quantity-btn" @click="incrementItem">+</span>
            </div>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        }

    }
}
</script>

<style>
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
}

.cart-item__info-text {
    margin-right: 40px;
    margin-bottom: 10px;
}

.cart-item__quantity {
    display: flex;
    flex-direction: column;
}

.cart-item__quantity-btn {
    cursor: pointer;
}
</style>