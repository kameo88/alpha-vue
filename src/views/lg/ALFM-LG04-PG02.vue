<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">로그인 시 필요한 이메일과 <br>비밀번호를 입력해주세요</div>

      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_label">이메일</div>
            <div class="form_item"><!-- class="form_item val_chk" -->
              <div class="input_box">
                <input type="text" class="input" placeholder="아이디">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
              <span class="mark_div">@</span>
              <div class="input_box">
                <input type="text" class="input" placeholder="도메인" id="domain">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">이메일 형식을 확인해주세요</div>
            <div class="form_item">
              <button type="button" class="btn_select" id="btn_selectDomainPop" @click="$popup.open('#selectDomainPop', '#btn_selectDomainPop');">직접입력</button>
            </div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn md c03">중복확인</button>
					</div>
          <div class="form_group">
            <div class="form_label">변경할 비밀번호</div>
            <div class="form_item"> <!-- class="form_item val_chk" -->
              <div class="input_box">
                <input type="password" class="input" placeholder="10~20자의 영문, 숫자 조합">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">10~20자의 영문, 숫자 조합을 사용해주세요</div>

            <div class="form_item"> <!-- class="form_item val_chk" -->
              <div class="input_box">
                <input type="password" class="input" placeholder="비밀번호 확인">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">비밀번호가 일치하지 않습니다</div>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="box_gray">
          <strong>비밀번호 필수조건</strong>
          <ul class="text_list_bull">
            <li>10~20자의 영문과 숫자를 혼용해서 사용해야 합니다.</li>
            <li>동일한 문자/숫자를 연속으로 4자리 이상 포함할 수 없습니다. (예. aaaa, 1111)</li>
            <li>연속된 숫자는 4자리 이상 사용하실 수 없습니다. (예. 1234…..5678)</li>
            <li>아이디가 포함된 비밀번호는 사용할 수 없습니다.</li>
          </ul>
        </div>
      </div><!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PG02',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '가입 정보 입력' },
      popupItem: ['selectDomainPop'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  }
}
</script>
