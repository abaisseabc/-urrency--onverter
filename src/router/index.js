import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'conversion',
    component: () => import('../views/ConversionPage.vue')
  },
  {
    path: '/current',
    name: 'about',
    component: () => import( '../views/CurrentCurrenciesPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
