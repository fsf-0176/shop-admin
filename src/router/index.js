import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      auth: true
    },
    component: Home
  },
  {
    path: '/trolley',
    name: 'Trolley',
    meta: {
      auth: true
    },
    component: () => import('../views/Trolley.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      auth: true
    },
    component: () => import('../views/User.vue')
  },
  {
    path: '/show-setting',
    name: 'ShowSetting',
    meta: {
      auth: true
    },
    component: () => import('../views/setting/ShowSetting.vue')
  },
  {
    path: '/ad-setting',
    name: 'AdSetting',
    meta: {
      auth: true
    },
    component: () => import('../views/setting/AdSetting.vue')
  },
  {
    path: '/notice-setting',
    name: 'NoticeSetting',
    meta: {
      auth: true
    },
    component: () => import('../views/setting/NoticeSetting.vue')
  },
  {
    path: '/admin-setting',
    name: 'AdminSetting',
    meta: {
      auth: true
    },
    component: () => import('../views/setting/AdminSetting.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    meta: {
      auth: true
    },
    component: () => import('../views/product/ProductList.vue')
  },
  {
    path: '/product-setting',
    name: 'ProductSetting',
    meta: {
      auth: true
    },
    component: () => import('../views/product/ProductSetting.vue')
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      auth: true
    },
    component: () => import('../views/order/Order.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      auth: false
    },
    component: () => import('../views/login/Index.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
const auth = localStorage.getItem('auth')
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要鉴权页面
    if (!auth) {
      // 没有登录，返回登录页面
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    // 不需要鉴权
    if (auth) {
      // 已经登录，重定向到首页
      next('/')
    } else {
      next()
    }
  }
})
export default router
