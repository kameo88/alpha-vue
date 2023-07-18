<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">가지고 계신 USIM의 <br>정보를 입력해 주세요</div>

      <div class="section">
        <div class="info_input_img">
          <img src="@/assets/images/component/img_bar_code.png" alt="LG U+ 모두의 유심, 원칩 U+ 알뜰폰(MVNO) 공용, 바코드 예시 유심 모델명 K3620XX 유심 일련번호 00001234">
        </div>
      </div>  <!-- // section -->

      <div class="section">

        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">USIM 모델명</strong>
            <div class="form_item">
              <button type="button" class="btn_select" id="btn_selectUSIMModel" @click="$popup.open('#selectUSIMModel', '#btn_selectUSIMModel');">선택</button>
            </div>
          </div>
          
          <div class="form_group">
            <strong class="form_label">일련번호</strong>
            <div class="form_item">
              <div class="input_box">
                <input type="text" class="input" placeholder="숫자 8자리 입력" id="input">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">USIM 정보를 다시 확인해주세요</div>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">인증하기</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PG03',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'USIM 정보 입력', floatMenu: 'none' },
      popupItem: ['selectUSIMModel'],
      next: false,
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  },
}
</script>
  