import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trolley',
    name: 'Trolley',
    component: () => import('../views/Trolley.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/show-setting',
    name: 'ShowSetting',
    component: () => import('../views/setting/ShowSetting.vue')
  },
  {
    path: '/ad-setting',
    name: 'AdSetting',
    component: () => import('../views/setting/AdSetting.vue')
  },
  {
    path: '/notice-setting',
    name: 'NoticeSetting',
    component: () => import('../views/setting/NoticeSetting.vue')
  },
  {
    path: '/admin-setting',
    name: 'AdminSetting',
    component: () => import('../views/setting/AdminSetting.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: () => import('../views/product/ProductList.vue')
  },
  {
    path: '/product-setting',
    name: 'ProductSetting',
    component: () => import('../views/product/ProductSetting.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
