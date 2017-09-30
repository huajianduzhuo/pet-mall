import Vue from 'vue'
import Router from 'vue-router'

const mainContainer = () => import('../components/mainContainer/mainContainer.vue')
const categories = () => import('../components/categories/categories.vue')
const shopcart = () => import('../components/shopcart/shopcart.vue')
const userCenter = () => import('../components/userCenter/userCenter.vue')
const login = () => import('../components/login/login.vue')
const mainIndex = () => import('../components/main_index/mainIndex.vue')
const mainMenu = () => import('../components/main_menu/main_menu.vue')
const address = () => import('../components/address/address.vue')
const sort = () => import('../components/categories_sort/sort.vue')
const brands = () => import('../components/categories_brands/brands.vue')
const goodlist = () => import('../components/goodlist/goodlist.vue')
const register = () => import('../components/register/register.vue')

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      component: mainContainer,
      children: [
        {
          path: 'index',
          component: mainIndex,
          children: [
            {
              path: '/main/index/:type',
              component: mainIndex
            }
          ]
        },
        {
          path: 'menu/:menuId',
          component: mainMenu
        }
      ],
      redirect: '/main/index'
    },
    {
      path: '/categories',
      component: categories,
      children: [
        {
          path: 'sort',
          component: sort
        },
        {
          path: 'brands',
          component: brands
        }
      ],
      redirect: '/categories/sort'
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/userCenter',
      component: userCenter
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/switch',
      component: address
    },
    {
      path: '/goodlist',
      component: goodlist
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
});
