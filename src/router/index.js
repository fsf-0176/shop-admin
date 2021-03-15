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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
