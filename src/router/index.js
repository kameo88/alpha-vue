// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/views/Home.vue'),
    redirect: '/list/ListGuide',
  },

  // guide list
  {
    path: '/list',
    component: () => import('@/layouts/GuideLayout.vue'),
    children: [
      {
        path: 'ListGuide',
        component: () => import('@/views/guide/ListGuide.vue'),
      },
      {
        path: 'ListCommon',
        component: () => import('@/views/guide/ListCommon.vue'),
      },
      {
        path: 'ListMain',
        component: () => import('@/views/guide/ListMain.vue'),
      },
      {
        path: 'ListUsim',
        component: () => import('@/views/guide/ListUsim.vue'),
      },
      {
        path: 'ListRatePlan',
        component: () => import('@/views/guide/ListRatePlan.vue'),
      },
      {
        path: 'ListBeneFit',
        component: () => import('@/views/guide/ListBeneFit.vue'),
      },
      {
        path: 'ListCS',
        component: () => import('@/views/guide/ListCS.vue'),
      },
      {
        path: 'ListMypage',
        component: () => import('@/views/guide/ListMypage.vue'),
      },
      {
        path: 'ListLogin',
        component: () => import('@/views/guide/ListLogin.vue'),
      },
      {
        path: 'ListFooter',
        component: () => import('@/views/guide/ListFooter.vue'),
      },
    ]
  },


  // guide
  {
    path: '/guide',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'layout',
        component: () => import('@/views/guide/Layout.vue'),
      },
      {
        path: 'template',
        component: () => import('@/views/guide/Template.vue'),
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
        path: 'form_vuetify',
        component: () => import('@/views/guide/FormVuetify.vue'),
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
      },
      {
        path: 'sticky',
        component: () => import('@/views/guide/Sticky.vue'),
      },
    ]
  },

  


  // 공통, etc
  {
    path: '/cm',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-CM01-PG00',
        component: () => import('@/views/guide/ALFM-CM01-PG00.vue'),
      },
    ]
  },

  


  // email
  {
    path: '/email/ALFP-CM01-PG00',
    component: () => import('@/views/email/ALFP-CM01-PG00.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG01',
    component: () => import('@/views/email/ALFP-CM01-PG01.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG02',
    component: () => import('@/views/email/ALFP-CM01-PG02.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG03',
    component: () => import('@/views/email/ALFP-CM01-PG03.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG04',
    component: () => import('@/views/email/ALFP-CM01-PG04.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG05',
    component: () => import('@/views/email/ALFP-CM01-PG05.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG06',
    component: () => import('@/views/email/ALFP-CM01-PG06.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG07',
    component: () => import('@/views/email/ALFP-CM01-PG07.vue'),
  }

  



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
