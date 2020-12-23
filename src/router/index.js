import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Details = () => import('views/details/Details')
const routes = [
    {
      path: '/', 
      redirect: '/home',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Name',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
      meta:{
        keepAlive:false 
     },
    }
  ]

const router = new VueRouter({
    routes,
    modules: 'history'
})

export default router