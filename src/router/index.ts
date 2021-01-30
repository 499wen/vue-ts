import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/regist',
    name: '注册',
    component: () => import(/* webpackChunkName: "regist" */ '../pages/Regist/regist.vue'),
  },

  {
    path: '/login',
    name: '登录',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login/login.vue'),
  },

  {
    path: '/',
    name: '框架',
    component: () => import(/* webpackChunkName: "index" */ '../pages/Index/index.vue'),
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home/home.vue'),
      },
      {
        path: '/role',
        name: '权限',
        component: () => import(/* webpackChunkName: "role" */ '../pages/Role/role.vue'),
      },

      /**
       * 基础设置 - 酒店管理
       */
      {
        path: '/hotel',
        name: '酒店',
        component: () => import(/* webpackChunkName: "hotel" */ '../pages/Hotel/hotel.vue'),
        children: []
      },
      {
        path: '/addHotel',
        name: '添加酒店',
        component: () => import(/* webpackChunkName: "addHotel" */ '../pages/Hotel/addHotel/addHotel.vue'),
      },
      
      /**
       * 基础设置 - 酒店管理
       */
      {
        path: '/restaurant',
        name: '餐厅',
        component: () => import(/* webpackChunkName: "restaurant" */ '../pages/Restaurant/restaurant.vue'),
        children: []
      },
      {
        path: '/addRestaurant',
        name: '添加餐厅',
        component: () => import(/* webpackChunkName: "addRestaurant" */ '../pages/Restaurant/addRestaurant/addRestaurant.vue'),
      },

      /**
       * 基础设置 - 酒店管理
       */
      {
        path: '/onferRoom',
        name: '会议室',
        component: () => import(/* webpackChunkName: "onferRoom" */ '../pages/OnferRoom/onferRoom.vue'),
        children: []
      },
      {
        path: '/addOnferRoom',
        name: '添加会议室',
        component: () => import(/* webpackChunkName: "addOnferRoom" */ '../pages/OnferRoom/addOnferRoom/addOnferRoom.vue'),
      }
    ]
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
