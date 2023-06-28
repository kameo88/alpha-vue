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
  // {
  //   path: '/',
  //   component: () => import('@/layouts/default/Guide.vue'),
  //   children: [
  //     {
  //       path: '/Popup',
  //       name: 'Popup',
  //       component: () => import('@/views/guide/Popup.vue'),
  //     },
  //   ],
  // },
  {
    path: '/ListGuide',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: 'layout',
        component: () => import('@/views/guide/Layout.vue'),
      },
      {
        path: 'popup',
        component: () => import('@/views/guide/Popup.vue'),
      },
      {
        path: 'text',
        component: () => import('@/views/guide/Text.vue'),
      },
      {
        path: 'form',
        component: () => import('@/views/guide/Form.vue'),
      },
      {
        path: 'form_etc',
        component: () => import('@/views/guide/FormEtc.vue'),
      },
      {
        path: 'tab',
        component: () => import('@/views/guide/Tab.vue'),
      },
      {
        path: 'tag',
        component: () => import('@/views/guide/Tag.vue'),
      },
      {
        path: 'accordion',
        component: () => import('@/views/guide/Accordion.vue'),
      },
      {
        path: 'button',
        component: () => import('@/views/guide/Button.vue'),
      },
      {
        path: 'table',
        component: () => import('@/views/guide/Table.vue'),
      },
      {
        path: 'info_list',
        component: () => import('@/views/guide/InfoList.vue'),
      },
      {
        path: 'flag',
        component: () => import('@/views/guide/Flag.vue'),
      },
      {
        path: 'list',
        component: () => import('@/views/guide/List.vue'),
      },
      {
        path: 'swiper',
        component: () => import('@/views/guide/Swiper.vue'),
      },
      {
        path: 'logo',
        component: () => import('@/views/guide/Logo.vue'),
      },
      {
        path: 'animation',
        component: () => import('@/views/guide/Animation.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
