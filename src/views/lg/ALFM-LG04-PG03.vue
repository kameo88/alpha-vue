<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info"><sup>+</sup>알파 홈페이지 서비스의 <br>약관/방침을 읽고 동의해주세요</div>

      <div class="section">
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all02" name="all">
            <label for="check_all02"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list01">
            <div class="cst_panel">
              <ul>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_01" name="">
                    <label for="check_consent00_01">사이트 이용약관 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_02" name="">
                    <label for="check_consent00_02">개인정보 수집이용 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_03" name="">
                    <label for="check_consent00_03">개인정보 제3자 제공안내 <span>(선택)</span></label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_04" name="">
                    <label for="check_consent00_04">광고성 정보 수신 <span>(선택)</span></label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- // terms_consent -->
      </div> <!-- // section -->
      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <a href="javascript:void(0);" role="button" class="btn lg c01" disabled>동의하고 가입하기</a>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PG03',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '이용약관 동의' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
