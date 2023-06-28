// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    // component: () => import('@/layouts/default/Default.vue'),
    // children: [
    //   {
    //     path: '',
    //     name: 'Home',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    //   },
    // ],
  },

  {
    path: '/guide',
    component: () => import('@/layouts/default/Guide.vue'),


    // ListGuide
    children: [
      {
        path: 'ListGuide',
        component: () => import('@/views/guide/ListGuide.vue'),
      },
      {
        path: 'ListGuide/Template',
        component: () => import('@/views/guide/Template.vue'),
      },
      {
        path: 'ListGuide/Layout',
        component: () => import('@/views/guide/Layout.vue'),
      },
      {
        path: 'ListGuide/Popup',
        component: () => import('@/views/guide/Popup.vue'),
      },
      {
        path: 'ListGuide/Text',
        component: () => import('@/views/guide/Text.vue'),
      },
      {
        path: 'ListGuide/Form',
        component: () => import('@/views/guide/Form.vue'),
      },
      {
        path: 'ListGuide/FormEtc',
        component: () => import('@/views/guide/FormEtc.vue'),
      },
      {
        path: 'ListGuide/Tab',
        component: () => import('@/views/guide/Tab.vue'),
      },
      {
        path: 'ListGuide/Tag',
        component: () => import('@/views/guide/Tag.vue'),
      },
      {
        path: 'ListGuide/Accordion',
        component: () => import('@/views/guide/Accordion.vue'),
      },
      {
        path: 'ListGuide/Button',
        component: () => import('@/views/guide/Button.vue'),
      },
      {
        path: 'ListGuide/Table',
        component: () => import('@/views/guide/Table.vue'),
      },
      {
        path: 'ListGuide/InfoList',
        component: () => import('@/views/guide/InfoList.vue'),
      },
      {
        path: 'ListGuide/Flag',
        component: () => import('@/views/guide/Flag.vue'),
      },
      {
        path: 'ListGuide/List',
        component: () => import('@/views/guide/List.vue'),
      },
      {
        path: 'ListGuide/Swiper',
        component: () => import('@/views/guide/Swiper.vue'),
      },
      {
        path: 'ListGuide/Logo',
        component: () => import('@/views/guide/Logo.vue'),
      },
      {
        path: 'ListGuide/Animation',
        component: () => import('@/views/guide/Animation.vue'),
      },


      // guide
      {
        path: 'ListCommon',
        component: () => import('@/views/guide/ListCommon.vue'),
      },
      // {
      //   path: 'ListCommon/sub',
      //   component: () => import('@/views/guide/ListCommon.vue'),
      // },


      // main
      {
        path: 'ListMain',
        component: () => import('@/views/guide/ListMain.vue'),
      },
      // {
      //   path: 'ListMain/sub',
      //   component: () => import('@/views/guide/ListMain.vue'),
      // },


      // 유심구매
      {
        path: 'ListUsim',
        component: () => import('@/views/guide/ListUsim.vue'),
      },
      // {
      //   path: 'ListUsim/sub',
      //   component: () => import('@/views/guide/ListUsim.vue'),
      // },


      // 요금제
      {
        path: 'ListRatePlan',
        component: () => import('@/views/guide/ListRatePlan.vue'),
      },
      // {
      //   path: 'ListRatePlan/sub',
      //   component: () => import('@/views/guide/ListRatePlan.vue'),
      // },


      // 혜택
      {
        path: 'ListBeneFit',
        component: () => import('@/views/guide/ListBeneFit.vue'),
      },
      // {
      //   path: 'ListBeneFit/sub',
      //   component: () => import('@/views/guide/ListBeneFit.vue'),
      // },


      // 고객지원
      {
        path: 'ListCS',
        component: () => import('@/views/guide/ListCS.vue'),
      },
      // {
      //   path: 'ListCS/sub',
      //   component: () => import('@/views/guide/ListCS.vue'),
      // },


      // 마이페이지
      {
        path: 'ListMypage',
        component: () => import('@/views/guide/ListMypage.vue'),
      },
      // {
      //   path: 'ListMypage/sub',
      //   component: () => import('@/views/guide/ListMypage.vue'),
      // },


      // 로그인
      {
        path: 'ListLogin',
        component: () => import('@/views/guide/ListLogin.vue'),
      },
      // {
      //   path: 'ListLogin/sub',
      //   component: () => import('@/views/guide/ListLogin.vue'),
      // },


      // 푸터
      {
        path: 'ListFooter',
        component: () => import('@/views/guide/ListFooter.vue'),
      },
      // {
      //   path: 'ListFooter/sub',
      //   component: () => import('@/views/guide/ListFooter.vue'),
      // },




    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
