<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      
      <div class="page_info">Animation</div>


      <div class="section">
        <h3 class="tit02">complete</h3>
        <LottieKameo />
        <LottieCameo name="loading" />
      </div><!-- // section -->

    </div> <!-- // content -->
  </div> <!-- // container -->
</template>



<script>
import LottieKameo from "@/components/LottieKameo.vue";
import LottieCameo from "@/components/LottieCameo.vue";

export default {
  name: "GuideAnimation",
  // emits: ['popupItem', 'setLayout'],
  data(){
    return {
      // layout: { header: 'sub2', footer: '', title: '' },
    }
  },
  mounted(){
    // this.$emit('setLayout', this.layout);
  },
  components: {
    LottieKameo,
    LottieCameo,
  }
};
</script>