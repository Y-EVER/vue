import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Home from '../views/Home.vue'//首页
import Login from '../views/Login.vue'//登录
import Console from '../views/Console'//控制台
import Reception from '../views/Reception'//服务台
import Cook from '../views/Cook'//厨师
import Set from '@/views/set/Set'//基础设置

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[ 
      {path: '/home/menu', name: 'menu', component: () => import('../views/menu/Menu.vue')},//商品分类
      {path: '/home/products', name: 'products', component: () => import('../views/menu/Products.vue')},//商品列表
      {path: '/home/add_products', name: 'add_products', component: () => import('../views/menu/Add_products.vue')},//添加商品
    ]
  },
  {
    path: '/set',
    name: 'set',
    component: Set,
    children:[ 
      {path: '/set/vegetables', name: 'vegetables', component: () => import('../views/set/Vegetables.vue')},//菜品管理
      {path: '/set/board', name: 'board', component: () => import('../views/set/Board.vue')},//餐桌管理
      {path: '/set/store', name: 'store', component: () => import('../views/set/Store.vue')},//店面管理
    ]
  },
  {
    path:'/console',//控制台
    name:'console',
    component:Console,
  },
  {
    path:'/reception',//服务台
    name:'reception',
    component:Reception,
  },
  {
    path:'/cook',//厨师端
    name:'cook',
    component:Cook,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
