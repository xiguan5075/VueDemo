import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/Home'
import Brand from '@/Brand'
import Cart from '@/Cart'
import Me from '@/Me'
import Member from '@/Member'
import MyHome from '@/MyHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: MyHome,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,

        },
        {
          path: '/brand',
          name: 'Brand',
          component: Brand,
          children: [
            {
              path: '/brand/HelloWorld',
              name: 'HelloWorld',
              component: HelloWorld
            }
          ]
        },
        {
          path: '/member',
          name: 'Member',
          component: Member
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
