<template>

	<div class="wrap">
		<theHeader />
		<router-view />
		<theFooter />
	</div>

</template>

<script>
import theHeader from '@/layouts/theHeader.vue'
import theFooter from '@/layouts/theFooter.vue'

export default {
  name: 'MainLayout',
  components:{
    theHeader,
    theFooter,
  },
}
</script>

<style>
</style>