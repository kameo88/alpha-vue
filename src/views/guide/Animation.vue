<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      
      <div class="page_info">Animation</div>

      <div class="section">
        <h3 class="tit02">loading</h3>
        <compLottie name="loading" />
      </div>

      <div class="section">
        <h3 class="tit02">complete</h3>
        <compLottie name="complete" />
      </div>

      <div class="section">
        <h3 class="tit02">joinComplate</h3>
        <compLottie name="joinComplate" />
      </div>

      <div class="section">
        <h3 class="tit02">mainChar</h3>
        <compLottie name="mainChar" />
      </div>

      <div class="section">
        <h3 class="tit02">plan01</h3>
        <compLottie name="plan01" />
      </div>

      <div class="section">
        <h3 class="tit02">plan02</h3>
        <compLottie name="plan02" />
      </div>

      <div class="section">
        <h3 class="tit02">plan03</h3>
        <compLottie name="plan03" />
      </div>

      <div class="section">
        <h3 class="tit02">plan04</h3>
        <compLottie name="plan04" />
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div> <!-- // container -->
</template>



<script>
import compLottie from "@/components/Lottie.vue";

export default {
  name: "GuideAnimation",
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    compLottie,
  }
};
</script>