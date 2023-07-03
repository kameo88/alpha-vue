<template>
	<div class="wrap">
		<MainHeader />
		<router-view />
		<AsideFloat />
		<MainFooter />
	</div>
</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import AsideFloat from '@/layouts/AsideFloat.vue'
import MainFooter from '@/layouts/MainFooter.vue'

export default {
  name: 'MainLayout',
  components:{
    MainHeader,
    AsideFloat,
    MainFooter,
  },
}
</script>