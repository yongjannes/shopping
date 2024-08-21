import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/',
      component: () => import('@/views/layout'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/layout/home')
        },
        {
          path: '/category',
          component: () => import('@/views/layout/category')
        },
        {
          path: '/cart',
          component: () => import('@/views/layout/cart')
        },
        {
          path: '/user',
          component: () => import('@/views/layout/user')
        }
      ]
    },
    {
      path: '/search',
      component: () => import('@/views/search')
    },
    {
      path: '/searchlist',
      component: () => import('@/views/search/list')
    },
    {
      path: '/prodetail/:id',
      component: () => import('@/views/prodetail')
    },
    {
      path: '/pay',
      component: () => import('@/views/pay')
    },
    {
      path: '/myorder',
      component: () => import('@/views/myorder')
    }
  ]
})

export default router
