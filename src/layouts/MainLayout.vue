<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const scrollProgress = ref(0);

const handleScroll = () => {
  const scrollTop = window.scrollY; // 현재 스크롤 위치
  const docHeight = document.documentElement.scrollHeight - window.innerHeight; // 문서 전체 높이에서 화면 높이 제외
  
  scrollProgress.value = (scrollTop / docHeight) * 100; // 스크롤 진행률 계산

  // 스크롤이 100px 이상이면 'kameo' 클래스를 추가
  isScrolled.value = window.scrollY > 10;
  
};

// 컴포넌트가 마운트될 때 스크롤 이벤트 등록
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 컴포넌트가 언마운트될 때 스크롤 이벤트 해제
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div>
  <div class="loading" v-if="loading">
    <div class="lottie"><compLottie name="loading" /></div>
    <span class="blind">loading</span>
  </div>

  <div class="skip">
    <a href="#content">본문 바로가기</a>
  </div>    

	<div class="wrap" :class="{kameo : isScrolled}">
		<MainHeader :layout="layout" />
    <!--^ 20240907 progress bar 추가 -->
    <div class="progress-bar" :style="{ width: `${scrollProgress}%` }"></div> <!-- 진행률 바 -->
    <!--v 20240907 progress bar 추가 -->

		<router-view @popup-item="popupItem = $event;" @set-layout="getLayout($event)" />
		<!-- <AsideFloat :layout="layout" /> -->
		<!-- <MainFooter :layout="layout" /> -->
	</div>

  <compPopup :popupItem="popupItem" />
</div>
</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
// import AsideFloat from '@/layouts/AsideFloat.vue'
// import MainFooter from '@/layouts/MainFooter.vue'

import compPopup from '@/components/Popup.vue'
import compLottie from "@/components/Lottie.vue"

export default {
  name: 'MainLayout',
  data(){
    return {
      layout: { "header" : 1 },
      loading: false,
      popupItem: [],
    }
  },
  methods: {
    getLayout(Obj){
      this.layout = Obj;
    }
  },
  mounted(){
    if( this.$route.path == "/guide/layout" ){
      this.loading = true;
      this.$scroll.noScroll();
      setTimeout(() => {
        this.loading = false;
        this.$scroll.scroll();
      }, 2000);
    }
  },
  components:{
    MainHeader,
    // AsideFloat,
    // MainFooter,
    compPopup,
    compLottie
  },
}
</script>
<style scoped>
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    background-color: #3498db; /* 진행률 바 색상 */
    z-index: 1000;
    transition: width 0.1s ease;
}
</style>>