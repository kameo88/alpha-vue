// Composables
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListGuide',
        name: 'ListGuide',
        component: () => import('@/views/guide/ListGuide.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListCommon',
        name: 'ListCommon',
        component: () => import('@/views/guide/ListCommon.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListMain',
        name: 'ListMain',
        component: () => import('@/views/guide/ListMain.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListUsim',
        name: 'ListUsim',
        component: () => import('@/views/guide/ListUsim.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListRatePlan',
        name: 'ListRatePlan',
        component: () => import('@/views/guide/ListRatePlan.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListBenefit',
        name: 'ListBenefit',
        component: () => import('@/views/guide/ListBenefit.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListCS',
        name: 'ListCS',
        component: () => import('@/views/guide/ListCS.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListMypage',
        name: 'ListMypage',
        component: () => import('@/views/guide/ListMypage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListLogin',
        name: 'ListLogin',
        component: () => import('@/views/guide/ListLogin.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/ListFooter',
        name: 'ListFooter',
        component: () => import('@/views/guide/ListFooter.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: '/Popup',
        name: 'Popup',
        component: () => import('@/views/guide/Popup.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
