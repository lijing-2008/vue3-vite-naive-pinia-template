import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/helloworld' },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/403.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
// 导航守卫，如果用户未登录则跳转到登录页
// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const token = localCache.getItem('token')
//     if (!token) {
//       return '/login'
//     }
//   }
// })

export default router
