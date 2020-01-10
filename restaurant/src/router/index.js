
import Vue from 'vue'
import VueRouter from 'vue-router'
import '../assets/less/style.less'

import Commodity from '../views/commodity/Commodity.vue'
import Order from '../views/order/Order.vue'
import Mine from '../views/mine/Mine.vue'
import Settled from '../views/Settled.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/settled',
    name: 'settled',
    component: Settled,
    children:[
        {path: '/settled/settled',name: 'project',component: () => import('../views/Settled.vue')},//入驻
    ]
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: Commodity,
    children:[
        {path: '/commodity/commodity',name: 'project',component: () => import('../views/commodity/Commodity.vue')},//商品页
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children:[
        {path: '/order/order',name: 'project',component: () => import('../views/order/Order.vue')},//订单
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    children:[
        {path: '/mine/mine',name: 'project',component: () => import('../views/mine/Mine.vue')},//我的
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
