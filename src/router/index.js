import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import(/* webpackChunkName: "about" */ '../views/Play.vue')
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
