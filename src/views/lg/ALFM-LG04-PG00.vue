<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">간편하게 회원가입 하고, <br>회원 서비스를 이용해 보세요!</div>

      <div class="section">
        <div class="btn_wrap">
          <div class="btn_group"><a href="javascript:void(0);" role="button" class="btn md kakao">카카오톡으로 로그인하기</a></div>
          <div class="btn_group"><a href="javascript:void(0);" role="button" class="btn md naver">네이버로 로그인하기</a></div>
          <div class="btn_group"><a href="javascript:void(0);" role="button" class="btn md email">이메일로 시작하기</a></div>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '회원가입' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
