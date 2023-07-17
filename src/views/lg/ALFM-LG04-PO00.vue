<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">중복된 이메일이 없을 경우</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_loginPop01" @click="$popup.open('#loginPop01', '#btn_loginPop01');">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">기존 계정 또는 탈퇴한 경우</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_loginPop02" @click="$popup.open('#loginPop02', '#btn_loginPop02');">Alert</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PO00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '회원가입 메인 > 정보입력' },
      popupItem: ['loginPop01', 'loginPop02'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  }
}
</script>
