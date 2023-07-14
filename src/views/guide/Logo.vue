<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">partner logo</div>
      
      <div class="section">
        <h3 class="tit02">width: 240, height: 120, padding O </h3>
        
        <img src="@/assets/images/data/logo_partner01.png" alt="A모바일">
        <img src="@/assets/images/data/logo_partner02.png" alt="FLASH모바일">
        <img src="@/assets/images/data/logo_partner03.png" alt="KG모빌리언스">
        <img src="@/assets/images/data/logo_partner04.png" alt="U+유모바일">
        <img src="@/assets/images/data/logo_partner05.png" alt="WELL">
        <img src="@/assets/images/data/logo_partner06.png" alt="freeT">
        <img src="@/assets/images/data/logo_partner07.png" alt="mobing">
        <img src="@/assets/images/data/logo_partner08.png" alt="리브모바일">
        <img src="@/assets/images/data/logo_partner09.png" alt="마블프로듀스">
        <img src="@/assets/images/data/logo_partner10.png" alt="벨류컴">
        <img src="@/assets/images/data/logo_partner11.png" alt="슈가모바일">
        <img src="@/assets/images/data/logo_partner12.png" alt="스노우맨">
        <img src="@/assets/images/data/logo_partner13.png" alt="스마텔">
        <img src="@/assets/images/data/logo_partner14.png" alt="아이즈모바일">
        <img src="@/assets/images/data/logo_partner15.png" alt="앤텔레콤">
        <img src="@/assets/images/data/logo_partner16.png" alt="에스원안심모바일">
        <img src="@/assets/images/data/logo_partner17.png" alt="여유텔레콤">
        <img src="@/assets/images/data/logo_partner18.png" alt="이야기모바일">
        <img src="@/assets/images/data/logo_partner19.png" alt="이지모바일">
        <img src="@/assets/images/data/logo_partner20.png" alt="인스모바일">
        <img src="@/assets/images/data/logo_partner21.png" alt="티플러스">
        <img src="@/assets/images/data/logo_partner22.png" alt="헬로모바일">

      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">height: 32, padding X </h3>
            
        <div class="logo_box">
          <img src="@/assets/images/data/logo_s_alpha_b.png" alt="+알파">
          <span>
            <img src="@/assets/images/data/logo_s_alpha_w.png" alt="+알파">
          </span>
          <img src="@/assets/images/data/logo_s_partner01.png" alt="A모바일">
          <img src="@/assets/images/data/logo_s_partner02.png" alt="FLASH모바일">
          <img src="@/assets/images/data/logo_s_partner03.png" alt="KG모빌리언스">
          <img src="@/assets/images/data/logo_s_partner04.png" alt="U+유모바일">
          <img src="@/assets/images/data/logo_s_partner05.png" alt="WELL">
          <img src="@/assets/images/data/logo_s_partner06.png" alt="freeT">
          <img src="@/assets/images/data/logo_s_partner07.png" alt="mobing">
          <img src="@/assets/images/data/logo_s_partner08.png" alt="리브모바일">
          <img src="@/assets/images/data/logo_s_partner09.png" alt="마블프로듀스">
          <img src="@/assets/images/data/logo_s_partner10.png" alt="벨류컴">
          <img src="@/assets/images/data/logo_s_partner11.png" alt="슈가모바일">
          <img src="@/assets/images/data/logo_s_partner12.png" alt="스노우맨">
          <img src="@/assets/images/data/logo_s_partner13.png" alt="스마텔">
          <img src="@/assets/images/data/logo_s_partner14.png" alt="아이즈모바일">
          <img src="@/assets/images/data/logo_s_partner15.png" alt="앤텔레콤">
          <img src="@/assets/images/data/logo_s_partner16.png" alt="에스원안심모바일">
          <img src="@/assets/images/data/logo_s_partner17.png" alt="여유텔레콤">
          <img src="@/assets/images/data/logo_s_partner18.png" alt="이야기모바일">
          <img src="@/assets/images/data/logo_s_partner19.png" alt="이지모바일">
          <img src="@/assets/images/data/logo_s_partner20.png" alt="인스모바일">
          <img src="@/assets/images/data/logo_s_partner21.png" alt="티플러스">
          <img src="@/assets/images/data/logo_s_partner22.png" alt="헬로모바일">
        </div>

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideLogo',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
<style scoped>
.logo_box img {margin:0 20px 20px 0;}
.logo_box span {display:inline-block; margin:0 20px 20px 0; background:#000; vertical-align: top;}
.logo_box span img {margin:0;}
</style>
