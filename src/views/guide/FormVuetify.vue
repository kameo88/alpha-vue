<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form</div>
      
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
