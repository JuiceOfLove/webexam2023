import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import FormPage from '../pages/FormPage.vue'
import CartPage from '../pages/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/form',
    name: 'form',
    component: FormPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
