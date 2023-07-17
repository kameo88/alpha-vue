<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">고객님이 가입하신 <br>이메일이에요</div>

      <div class="section">
        <div class="box_gray box_rslt">
          <strong>abcdef@alpha.com</strong>
        </div>
      </div> <!-- // section -->
      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <a href="javascript:void(0);" role="button" class="btn lg c01">로그인 하기</a>
            </div>
            <div class="btn_group">
              <a href="javascript:void(0);" role="button" class="btn md c02">비밀번호 재설정</a>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG02-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '이메일 찾기 결과' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
