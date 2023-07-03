<template>

	<div class="wrap">
		<MainHeader />
		<router-view />
		<MainFooter />
	</div>
  <!-- // wrap -->

</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import MainFooter from '@/layouts/MainFooter.vue'

export default {
  name: 'MainLayout',
  components:{
    MainHeader,
    MainFooter,
  },
}
</script>