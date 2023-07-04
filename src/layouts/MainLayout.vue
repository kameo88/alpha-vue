<template>
  
  <div class="loading" v-if="loading">
    <lottie-player src="/src/assets/images/animation/loading.json" speed="1" loop autoplay></lottie-player>
    <span class="blind">loading</span>
    https://github.com/LottieFiles/lottie-vue
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

import '@/assets/js/lottie-player.js';
// import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';

export default {
  name: 'MainLayout',
  data(){
    return {
      loading: false,
    }
  },
  mounted(){
    if( this.$route.path == "/guide/layout" ){
      this.loading = true;
      setTimeout(() => { this.loading = false }, 1000);
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