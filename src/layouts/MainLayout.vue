<template>
  <div>
  <div class="loading" v-if="loading">
    <div class="lottie"><compLottie name="loading" /></div>
    <span class="blind">loading</span>
  </div>

  <div class="skip">
    <a href="#content">본문 바로가기</a>
  </div>    

	<div class="wrap">
		<MainHeader :layout="layout" />
		<router-view @popup-item="popupItem = $event;" @set-layout="getLayout($event)" />
		<AsideFloat :layout="layout" />
		<MainFooter :layout="layout" />
	</div>

  <compPopup :popupItem="popupItem" />
</div>
</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import AsideFloat from '@/layouts/AsideFloat.vue'
import MainFooter from '@/layouts/MainFooter.vue'

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
    AsideFloat,
    MainFooter,
    compPopup,
    compLottie
  },
}
</script>