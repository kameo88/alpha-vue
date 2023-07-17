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
        path: 'ListGuide',      component: () => import('@/views/guide/ListGuide.vue'),
      },
      {
        path: 'ListCommon',     component: () => import('@/views/guide/ListCommon.vue'),
      },
      {
        path: 'ListMain',       component: () => import('@/views/guide/ListMain.vue'),
      },
      {
        path: 'ListUsim',       component: () => import('@/views/guide/ListUsim.vue'),
      },
      {
        path: 'ListRatePlan',   component: () => import('@/views/guide/ListRatePlan.vue'),
      },
      {
        path: 'ListBeneFit',    component: () => import('@/views/guide/ListBeneFit.vue'),
      },
      {
        path: 'ListCS',         component: () => import('@/views/guide/ListCS.vue'),
      },
      {
        path: 'ListMypage',     component: () => import('@/views/guide/ListMypage.vue'),
      },
      {
        path: 'ListLogin',      component: () => import('@/views/guide/ListLogin.vue'),
      },
      {
        path: 'ListFooter',     component: () => import('@/views/guide/ListFooter.vue'),
      },
    ]
  },

  // guide
  {
    path: '/guide',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'layout',         component: () => import('@/views/guide/Layout.vue'),
      },
      {
        path: 'template',       component: () => import('@/views/guide/Template.vue'),
      },
      {
        path: 'popup',          component: () => import('@/views/guide/Popup.vue'),
      },
      {
        path: 'text',           component: () => import('@/views/guide/Text.vue'),
      },
      {
        path: 'form',           component: () => import('@/views/guide/Form.vue'),
      },
      {
        path: 'form_etc',       component: () => import('@/views/guide/FormEtc.vue'),
      },
      {
        path: 'form_vuetify',   component: () => import('@/views/guide/FormVuetify.vue'),
      },
      {
        path: 'tab',            component: () => import('@/views/guide/Tab.vue'),
      },
      {
        path: 'tag',            component: () => import('@/views/guide/Tag.vue'),
      },
      {
        path: 'accordion',      component: () => import('@/views/guide/Accordion.vue'),
      },
      {
        path: 'button',         component: () => import('@/views/guide/Button.vue'),
      },
      {
        path: 'table',          component: () => import('@/views/guide/Table.vue'),
      },
      {
        path: 'info_list',      component: () => import('@/views/guide/InfoList.vue'),
      },
      {
        path: 'flag',           component: () => import('@/views/guide/Flag.vue'),
      },
      {
        path: 'list',           component: () => import('@/views/guide/List.vue'),
      },
      {
        path: 'swiper',         component: () => import('@/views/guide/Swiper.vue'),
      },
      {
        path: 'logo',           component: () => import('@/views/guide/Logo.vue'),
      },
      {
        path: 'animation',      component: () => import('@/views/guide/Animation.vue'),
      },
      {
        path: 'sticky',         component: () => import('@/views/guide/Sticky.vue'),
      },
    ]
  },

  // 공통, etc
  {
    path: '/cm',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-CM01-PG00',         component: () => import('@/views/cm/ALFM-CM01-PG00.vue'),
      },
      {
        path: 'ALFM-CM02-PG00',         component: () => import('@/views/cm/ALFM-CM02-PG00.vue'),
      },
      {
        path: 'ALFM-CM11-PG00',         component: () => import('@/views/cm/ALFM-CM11-PG00.vue'),
      },
      {
        path: 'ALFM-CM05-PO00',         component: () => import('@/views/cm/ALFM-CM05-PO00.vue'),
      },
      {
        path: 'ALFM-CM06-PO00',         component: () => import('@/views/cm/ALFM-CM06-PO00.vue'),
      },
      {
        path: 'ALFM-CM07-PO00',         component: () => import('@/views/cm/ALFM-CM07-PO00.vue'),
      },
      {
        path: 'ALFM-CM08-PO00',         component: () => import('@/views/cm/ALFM-CM08-PO00.vue'),
      },
      {
        path: 'ALFM-CM09-PO00',         component: () => import('@/views/cm/ALFM-CM09-PO00.vue'),
      },
      {
        path: 'ALFM-CM10-PO00',         component: () => import('@/views/cm/ALFM-CM10-PO00.vue'),
      },
      {
        path: 'ALFM-CM12-PG00',         component: () => import('@/views/cm/ALFM-CM12-PG00.vue'),
      },
    ]
  },

  // 메인
  {
    path: '/ma',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-MA01-PG00',         component: () => import('@/views/ma/ALFM-MA01-PG00.vue'),
      },
      {
        path: 'ALFM-MA01-PG01',         component: () => import('@/views/ma/ALFM-MA01-PG01.vue'),
      },
      {
        path: 'ALFM-MA01-PG02',         component: () => import('@/views/ma/ALFM-MA01-PG02.vue'),
      },
      {
        path: 'ALFM-MA01-PG03',         component: () => import('@/views/ma/ALFM-MA01-PG03.vue'),
      },
    ]
  },

  // 유심구매
  {
    path: '/bu',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-BU01-PG00',         component: () => import('@/views/bu/ALFM-BU01-PG00.vue'),
      },
      {
        path: 'ALFM-BU01-PO00',         component: () => import('@/views/bu/ALFM-BU01-PO00.vue'),
      },
      {
        path: 'ALFM-BU01-PG01',         component: () => import('@/views/bu/ALFM-BU01-PG01.vue'),
      },
      {
        path: 'ALFM-BU01-PO01',         component: () => import('@/views/bu/ALFM-BU01-PO01.vue'),
      },
      {
        path: 'ALFM-BU01-PG02',         component: () => import('@/views/bu/ALFM-BU01-PG02.vue'),
      },
      {
        path: 'ALFM-BU01-PG03',         component: () => import('@/views/bu/ALFM-BU01-PG03.vue'),
      },
      {
        path: 'ALFM-BU02-PG00',         component: () => import('@/views/bu/ALFM-BU02-PG00.vue'),
      },
      {
        path: 'ALFM-BU02-PG01',         component: () => import('@/views/bu/ALFM-BU02-PG01.vue'),
      },
      {
        path: 'ALFM-BU02-PO00',         component: () => import('@/views/bu/ALFM-BU02-PO00.vue'),
      },
      {
        path: 'ALFM-BU02-PG02',         component: () => import('@/views/bu/ALFM-BU02-PG02.vue'),
      },
      {
        path: 'ALFM-BU02-PG03',         component: () => import('@/views/bu/ALFM-BU02-PG03.vue'),
      },
    ]
  },

  // 요금제
  {
    path: '/pr',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-PR01-PG00',         component: () => import('@/views/pr/ALFM-PR01-PG00.vue'),
      },
      {
        path: 'ALFM-PR01-PG01',         component: () => import('@/views/pr/ALFM-PR01-PG01.vue'),
      },
      {
        path: 'ALFM-PR02-PO00',         component: () => import('@/views/pr/ALFM-PR02-PO00.vue'),
      },
      {
        path: 'ALFM-PR02-PO01',         component: () => import('@/views/pr/ALFM-PR02-PO01.vue'),
      },
      {
        path: 'ALFM-PR02-PO02',         component: () => import('@/views/pr/ALFM-PR02-PO02.vue'),
      },
      {
        path: 'ALFM-PR02-PO03',         component: () => import('@/views/pr/ALFM-PR02-PO03.vue'),
      },
      {
        path: 'ALFM-PR02-PO04',         component: () => import('@/views/pr/ALFM-PR02-PO04.vue'),
      },
      {
        path: 'ALFM-PR02-PO05',         component: () => import('@/views/pr/ALFM-PR02-PO05.vue'),
      },
      {
        path: 'ALFM-PR02-PO06',         component: () => import('@/views/pr/ALFM-PR02-PO06.vue'),
      },
      {
        path: 'ALFM-PR02-PO07',         component: () => import('@/views/pr/ALFM-PR02-PO07.vue'),
      },
      {
        path: 'ALFM-PR02-PO08',         component: () => import('@/views/pr/ALFM-PR02-PO08.vue'),
      },
      {
        path: 'ALFM-PR03-PG00',         component: () => import('@/views/pr/ALFM-PR03-PG00.vue'),
      },
      {
        path: 'ALFM-PR03-PO00',         component: () => import('@/views/pr/ALFM-PR03-PO00.vue'),
      },
      {
        path: 'ALFM-PR03-PG01',         component: () => import('@/views/pr/ALFM-PR03-PG01.vue'),
      },
      {
        path: 'ALFM-PR03-PG02',         component: () => import('@/views/pr/ALFM-PR03-PG02.vue'),
      },
      {
        path: 'ALFM-PR03-PG03',         component: () => import('@/views/pr/ALFM-PR03-PG03.vue'),
      },
      {
        path: 'ALFM-PR03-PG23',         component: () => import('@/views/pr/ALFM-PR03-PG23.vue'),
      },
      {
        path: 'ALFM-PR03-PG04',         component: () => import('@/views/pr/ALFM-PR03-PG04.vue'),
      },
      {
        path: 'ALFM-PR03-PO04',         component: () => import('@/views/pr/ALFM-PR03-PO04.vue'),
      },
      {
        path: 'ALFM-PR03-PO01',          component: () => import('@/views/pr/ALFM-PR03-PO01.vue'),
      },
      {
        path: 'ALFM-PR03-PG05',         component: () => import('@/views/pr/ALFM-PR03-PG05.vue'),
      },
      {
        path: 'ALFM-PR03-PO05',         component: () => import('@/views/pr/ALFM-PR03-PO05.vue'),
      },
      {
        path: 'ALFM-PR03-PO02',         component: () => import('@/views/pr/ALFM-PR03-PO02.vue'),
      },
      {
        path: 'ALFM-PR03-PG06',         component: () => import('@/views/pr/ALFM-PR03-PG06.vue'),
      },
      {
        path: 'ALFM-PR03-PG07',         component: () => import('@/views/pr/ALFM-PR03-PG07.vue'),
      },
      {
        path: 'ALFM-PR03-PG08',         component: () => import('@/views/pr/ALFM-PR03-PG08.vue'),
      },
      {
        path: 'ALFM-PR03-PG20',         component: () => import('@/views/pr/ALFM-PR03-PG20.vue'),
      },
      {
        path: 'ALFM-PR03-PG09',         component: () => import('@/views/pr/ALFM-PR03-PG09.vue'),
      },
      {
        path: 'ALFM-PR03-PG21',         component: () => import('@/views/pr/ALFM-PR03-PG21.vue'),
      },
      {
        path: 'ALFM-PR03-PG22',         component: () => import('@/views/pr/ALFM-PR03-PG22.vue'),
      },
      {
        path: 'ALFM-PR03-PG10',         component: () => import('@/views/pr/ALFM-PR03-PG10.vue'),
      },
      {
        path: 'ALFM-PR03-PG11',         component: () => import('@/views/pr/ALFM-PR03-PG11.vue'),
      },
      {
        path: 'ALFM-PR03-PG12',         component: () => import('@/views/pr/ALFM-PR03-PG12.vue'),
      },
      {
        path: 'ALFM-PR03-PG13',         component: () => import('@/views/pr/ALFM-PR03-PG13.vue'),
      },
      {
        path: 'ALFM-PR03-PG14',         component: () => import('@/views/pr/ALFM-PR03-PG14.vue'),
      },
      {
        path: 'ALFM-PR03-PO03',         component: () => import('@/views/pr/ALFM-PR03-PO03.vue'),
      },
      {
        path: 'ALFM-PR03-PG15',         component: () => import('@/views/pr/ALFM-PR03-PG15.vue'),
      },
      {
        path: 'ALFM-PR03-PG16',         component: () => import('@/views/pr/ALFM-PR03-PG16.vue'),
      },
      {
        path: 'ALFM-PR03-PG17',         component: () => import('@/views/pr/ALFM-PR03-PG17.vue'),
      },
      {
        path: 'ALFM-PR03-PG18',         component: () => import('@/views/pr/ALFM-PR03-PG18.vue'),
      },
      {
        path: 'ALFM-PR03-PG19',         component: () => import('@/views/pr/ALFM-PR03-PG19.vue'),
      },
      {
        path: 'ALFM-PR03-PO19',         component: () => import('@/views/pr/ALFM-PR03-PO19.vue'),
      },
    ]
  },

  // 혜택
  {
    path: '/be',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-BE01-PG00',         component: () => import('@/views/be/ALFM-BE01-PG00.vue'),
      },
      {
        path: 'ALFM-BE01-LT00',         component: () => import('@/views/be/ALFM-BE01-LT00.vue'),
      },
      {
        path: 'ALFM-BE01-PG01',         component: () => import('@/views/be/ALFM-BE01-PG01.vue'),
      },
      {
        path: 'ALFM-BE01-LT01',         component: () => import('@/views/be/ALFM-BE01-LT01.vue'),
      },
      {
        path: 'ALFM-BE01-LT02',         component: () => import('@/views/be/ALFM-BE01-LT02.vue'),
      },
      {
        path: 'ALFM-BE02-LT00',         component: () => import('@/views/be/ALFM-BE02-LT00.vue'),
      },
      {
        path: 'ALFM-BE02-PG00',         component: () => import('@/views/be/ALFM-BE02-PG00.vue'),
      },
      {
        path: 'ALFM-BE03-LT00',         component: () => import('@/views/be/ALFM-BE03-LT00.vue'),
      },
      {
        path: 'ALFM-BE03-PG00',         component: () => import('@/views/be/ALFM-BE03-PG00.vue'),
      },
      {
        path: 'ALFM-BE04-PG00',         component: () => import('@/views/be/ALFM-BE04-PG00.vue'),
      },
      {
        path: 'ALFM-BE05-PG00',         component: () => import('@/views/be/ALFM-BE05-PG00.vue'),
      },
    ]
  },

  // 고객지원
  {
    path: '/cs',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-CS02-PG00',         component: () => import('@/views/cs/ALFM-CS02-PG00.vue'),
      },
      {
        path: 'ALFM-CS02-PG01',         component: () => import('@/views/cs/ALFM-CS02-PG01.vue'),
      },
      {
        path: 'ALFM-CS03-PG00',         component: () => import('@/views/cs/ALFM-CS03-PG00.vue'),
      },
      {
        path: 'ALFM-CS03-PG01',         component: () => import('@/views/cs/ALFM-CS03-PG01.vue'),
      },
      {
        path: 'ALFM-CS04-PG00',         component: () => import('@/views/cs/ALFM-CS04-PG00.vue'),
      },
      {
        path: 'ALFM-CS05-PG00',         component: () => import('@/views/cs/ALFM-CS05-PG00.vue'),
      },
      {
        path: 'ALFM-CS05-PO00',         component: () => import('@/views/cs/ALFM-CS05-PO00.vue'),
      },
      {
        path: 'ALFM-CS05-PG01',         component: () => import('@/views/cs/ALFM-CS05-PG01.vue'),
      },
      {
        path: 'ALFM-CS05-PO01',         component: () => import('@/views/cs/ALFM-CS05-PO01.vue'),
      },
      {
        path: 'ALFM-CS05-PO02',         component: () => import('@/views/cs/ALFM-CS05-PO02.vue'),
      },
    ]
  },

  // 마이페이지
  {
    path: '/my',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-MY01-PG00',         component: () => import('@/views/my/ALFM-MY01-PG00.vue'),
      },
      {
        path: 'ALFM-MY02-LT00',         component: () => import('@/views/my/ALFM-MY02-LT00.vue'),
      },
      {
        path: 'ALFM-MY02-PG00',         component: () => import('@/views/my/ALFM-MY02-PG00.vue'),
      },
      {
        path: 'ALFM-MY02-PO00',         component: () => import('@/views/my/ALFM-MY02-PO00.vue'),
      },
      {
        path: 'ALFM-MY03-LT00',         component: () => import('@/views/my/ALFM-MY03-LT00.vue'),
      },
      {
        path: 'ALFM-MY03-PG00',         component: () => import('@/views/my/ALFM-MY03-PG00.vue'),
      },
      {
        path: 'ALFM-MY04-LT00',         component: () => import('@/views/my/ALFM-MY04-LT00.vue'),
      },
      {
        path: 'ALFM-MY05-LT00',         component: () => import('@/views/my/ALFM-MY05-LT00.vue'),
      },
      {
        path: 'ALFM-MY06-LT00',         component: () => import('@/views/my/ALFM-MY06-LT00.vue'),
      },
      {
        path: 'ALFM-MY07-LT00',         component: () => import('@/views/my/ALFM-MY07-LT00.vue'),
      },
      {
        path: 'ALFM-MY07-PG00',         component: () => import('@/views/my/ALFM-MY07-PG00.vue'),
      },
      {
        path: 'ALFM-MY07-PG01',         component: () => import('@/views/my/ALFM-MY07-PG01.vue'),
      },
      {
        path: 'ALFM-MY09-LT00',         component: () => import('@/views/my/ALFM-MY09-LT00.vue'),
      },
      {
        path: 'ALFM-MY08-PG00',         component: () => import('@/views/my/ALFM-MY08-PG00.vue'),
      },
      {
        path: 'ALFM-MY08-PG01',         component: () => import('@/views/my/ALFM-MY08-PG01.vue'),
      },
      {
        path: 'ALFM-MY08-PO00',         component: () => import('@/views/my/ALFM-MY08-PO00.vue'),
      },
      {
        path: 'ALFM-MY08-PO01',         component: () => import('@/views/my/ALFM-MY08-PO01.vue'),
      },
    ]
  },

  // 로그인
  {
    path: '/lg',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-LG01-PG00',         component: () => import('@/views/lg/ALFM-LG01-PG00.vue'),
      },
      {
        path: 'ALFM-LG01-PG00-vuetify',         component: () => import('@/views/lg/ALFM-LG01-PG00-vuetify.vue'),
      },
      {
        path: 'ALFM-LG01-PO00',         component: () => import('@/views/lg/ALFM-LG01-PO00.vue'),
      },
      {
        path: 'ALFM-LG02-PG00',         component: () => import('@/views/lg/ALFM-LG02-PG00.vue'),
      },
      {
        path: 'ALFM-LG03-PG01',         component: () => import('@/views/lg/ALFM-LG03-PG01.vue'),
      },
      {
        path: 'ALFM-LG03-PG02',         component: () => import('@/views/lg/ALFM-LG03-PG02.vue'),
      },
      {
        path: 'ALFM-LG04-PG00',         component: () => import('@/views/lg/ALFM-LG04-PG00.vue'),
      },
      {
        path: 'ALFM-LG04-PG02',         component: () => import('@/views/lg/ALFM-LG04-PG02.vue'),
      },
      {
        path: 'ALFM-LG04-PO00',         component: () => import('@/views/lg/ALFM-LG04-PO00.vue'),
      },
      {
        path: 'ALFM-LG04-PG03',         component: () => import('@/views/lg/ALFM-LG04-PG03.vue'),
      },
      {
        path: 'ALFM-LG04-PG04',         component: () => import('@/views/lg/ALFM-LG04-PG04.vue'),
      },
    ]
  },

  // footer  
  {
    path: '/ft',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'ALFM-FT01-PG00',         component: () => import('@/views/ft/ALFM-FT01-PG00.vue'),
      },
      {
        path: 'ALFM-FT01-TA00',         component: () => import('@/views/ft/ALFM-FT01-TA00.vue'),
      },
      {
        path: 'ALFM-FT01-TA01',         component: () => import('@/views/ft/ALFM-FT01-TA01.vue'),
      },
      {
        path: 'ALFM-FT01-TA02',         component: () => import('@/views/ft/ALFM-FT01-TA02.vue'),
      },
      {
        path: 'ALFM-FT01-TA03',         component: () => import('@/views/ft/ALFM-FT01-TA03.vue'),
      },
      {
        path: 'ALFM-FT02-PG00',         component: () => import('@/views/ft/ALFM-FT02-PG00.vue'),
      },
      {
        path: 'ALFM-FT03-PG00',         component: () => import('@/views/ft/ALFM-FT03-PG00.vue'),
      },
      {
        path: 'ALFM-FT04-PG00',         component: () => import('@/views/ft/ALFM-FT04-PG00.vue'),
      },
      {
        path: 'ALFM-FT05-PG00',         component: () => import('@/views/ft/ALFM-FT05-PG00.vue'),
      },
    ]
  },

  // email
  {
    path: '/email/ALFP-CM01-PG00',      component: () => import('@/views/email/ALFP-CM01-PG00.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG01',      component: () => import('@/views/email/ALFP-CM01-PG01.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG02',      component: () => import('@/views/email/ALFP-CM01-PG02.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG03',      component: () => import('@/views/email/ALFP-CM01-PG03.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG04',      component: () => import('@/views/email/ALFP-CM01-PG04.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG05',      component: () => import('@/views/email/ALFP-CM01-PG05.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG06',      component: () => import('@/views/email/ALFP-CM01-PG06.vue'),
  },
  {
    path: '/email/ALFP-CM01-PG07',      component: () => import('@/views/email/ALFP-CM01-PG07.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
