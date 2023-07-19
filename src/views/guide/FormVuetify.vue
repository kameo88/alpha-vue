<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form</div>
      
      <div class="section">
        <h3 class="tit02">form_wrap</h3>
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_label">수령인</div>
            <div class="form_item">
              <v-text-field placeholder="이름 입력" variant="outlined" required hide-details="auto" clearable></v-text-field>
            </div>
            <div class="form_item">
              <v-text-field type="password" placeholder="비밀번호 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <div class="form_group">
            <div class="form_item">
              <v-text-field placeholder="검색어를 입력해주세요" append-inner-icon="mdi-magnify" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <div class="form_group">
            <div class="form_label">휴대폰 번호</div>
            <div class="form_item">
              <v-text-field placeholder="'-'없이 숫자만 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="form_item auth_num">
              <v-text-field variant="outlined" hide-details="auto" clearable></v-text-field>
              <div class="timer">
                <span>0:01</span>
                <button type="button">시간연장하기</button>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">input</h3>
          
          <div class="form_group">
            <div class="form_label">수령인</div>
            <div class="form_item">
              <v-text-field placeholder="고객명" variant="outlined" clearable></v-text-field>
            </div>
          </div>
          <v-text-field placeholder="고객명 disabled" variant="outlined" disabled></v-text-field>
          <v-text-field placeholder="고객명 readonly" variant="outlined" readonly></v-text-field>
          <v-text-field prefix="010-***" placeholder="전화번호 입력" variant="outlined"></v-text-field>
          <v-text-field placeholder="검색어를 입력해주세요" append-inner-icon="mdi-magnify" variant="outlined" clearable></v-text-field>
          <v-text-field :rules="[rules.required]" placeholder="필수항목" variant="outlined" clearable></v-text-field>

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideTemplate',
  data: () => ({
    rules: {
      required: value => !!value || 'Field is required',
    },
  }),
}
</script>
