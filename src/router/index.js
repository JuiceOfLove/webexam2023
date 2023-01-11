import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AboutView from '../pages/AboutView.vue'
import CartPage from '../pages/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
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
