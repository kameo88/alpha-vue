<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info"><em>박연진님</em>, <br>⁠비밀번호 재설정을 완료했어요!</div>


      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <a href="javascript:void(0);" role="button" class="btn lg c01">로그인 하기</a>
            </div>
            <div class="btn_group">
              <a href="javascript:void(0);" role="button" class="btn md c02">요금제 보러가기</a>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG03-PG02',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '비밀번호 재설정 완료' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
