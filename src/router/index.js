import { createRouter, createWebHistory } from 'vue-router'
import CoffeeHome from '../views/CoffeeHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoffeeHome,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('../views/CooperationView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../views/BusinessView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/internation',
      name: 'internation',
      component: () => import('../views/InternationView.vue')
    },
  ],
})

export default router
