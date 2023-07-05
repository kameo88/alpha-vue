<template>
  <div class="loading" v-if="loading.show">
    <Vue3Lottie  class="lottie" :animationData="loading.data" loop autoplay />
    <span class="blind">loading</span>
  </div>

  <div class="skip">
    <a href="#content">본문 바로가기</a>
  </div>    

	<div class="wrap">
		<MainHeader />
		<router-view />
		<AsideFloat />
		<MainFooter />
	</div>
  <MainPopup />
</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import AsideFloat from '@/layouts/AsideFloat.vue'
import MainFooter from '@/layouts/MainFooter.vue'
import MainPopup from '@/layouts/MainPopup.vue'
import LottieLoading from "/src/assets/images/animation/loading.json";

export default {
  name: 'MainLayout',
  data(){
    return {
      loading: {"show": false, "data": LottieLoading },
    }
  },
  mounted(){
    if( this.$route.path == "/guide/layout" ){
      this.loading.show = true;
      setTimeout(() => { this.loading.show = false }, 2000);
    }
  },
  components:{
    MainHeader,
    AsideFloat,
    MainFooter,
    MainPopup,
  },
}
</script>