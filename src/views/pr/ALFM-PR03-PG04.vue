<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        가지고 계신 eSIM 단말기의 <br>
        정보(EID, IMEI1, IMEI2)를 <br>
        입력해 주세요
      </div>

      <div class="section">
        <div class="box_gray">
          <strong>정보(EID, IMEI1, IMEI2) 확인 방법</strong>
          <ul class="text_list_bull">
            <li>통화 키패드에서 [<span class="fc01">*#06#</span>] 입력하여 표시되는 화면을 캡처 <br><a href="javascript:void(0);" role="button" class="btn xsm c07 mgt8">자세히 보기</a></li>
          </ul>
        </div>

        <div class="btn_group mgt20">
          <label class="btn md c03" for="imgUpload">캡처한 이미지 올리기</label>
          <input class="blind" type="file" id="imgUpload" name="imgUpload" accept="image/*">
        </div>

        <button type="button" class="text_btn" @click="selfInput = true">직접 입력하기</button>
      </div> <!-- // section -->

      <div class="section">

        <div class="form_wrap">

          <div class="form_group">
            <strong class="form_label">EID</strong>
              <div class="form_item">
                <div class="input_box">
                  <input type="text" class="input" placeholder="앞에서부터 숫자 32자리 입력" v-bind:disabled="selfInput == false">
                  <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                </div>
              </div>
              <div class="error">error</div>
          </div>

          <div class="form_group">
            <strong class="form_label">IMEI 1</strong>
              <div class="form_item">
                <div class="input_box">
                  <input type="text" class="input" placeholder="앞에서부터 숫자 14자리 입력" v-bind:disabled="selfInput == false">
                  <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                </div>
              </div>
              <div class="error">error</div>
          </div>
          
          <div class="form_group">
            <strong class="form_label">IMEI 2</strong>
              <div class="form_item">
                <div class="input_box">
                  <input type="text" class="input" placeholder="앞에서부터 숫자 14자리 입력" v-bind:disabled="selfInput == false">
                  <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                </div>
              </div>
              <div class="error">error</div>
          </div>

        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="box_gray">
          <ul class="text_list_bull">
            <li>EID, IMEI 정보는 맨 마지막 자리를 제외한 숫자를 입력해주세요.</li>
            <li>입력한 단말정보가 불일치 할 경우 eSIM 개통이 되지 않습니다. 꼭 확인해주세요.</li>
          </ul>
        </div>
      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>인증하기</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PG04',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'eSIM 정보 입력', floatMenu: 'none' },
      popupItem: [],
      next: false,
      selfInput: false,
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    // this.$emit('popupItem', this.popupItem);
  },
}
</script>
  