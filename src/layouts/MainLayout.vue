<template>
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

export default {
  name: 'MainLayout',
  components:{
    MainHeader,
    AsideFloat,
    MainFooter,
    MainPopup,
  },
}
</script>