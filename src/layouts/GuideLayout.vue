<template>

	<div class="wrap">
		<GuideHeader :page="page" :pageOn="pageOn" @changeGuidePage="changeGuidePage" />
		<router-view />
	</div>
  <!-- // wrap -->

</template>

<script>
import GuideHeader from '@/layouts/GuideHeader.vue'

export default {
  name: 'GuideLayout',
  emits: ['changeGuidePage'],
  methods: {
    changeGuidePage(num){
      this.$emit('changeGuidePage', num);
    }
  },
  props : {
    page: Object,
    pageOn: Number,
  },
  components:{
    GuideHeader,
  },
}
</script>

<style>
  @import url(../views/guide/guide.css);
</style>