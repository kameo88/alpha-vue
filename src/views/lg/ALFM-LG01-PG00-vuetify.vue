<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info center">간편하게 로그인 해보세요!</div>

      <div class="section">
        <div class="btn_wrap">
          <div class="btn_group"><a href="javascript:void(0);" role="button" class="btn md kakao">카카오톡으로 로그인하기</a></div>
          <div class="btn_group"><a href="javascript:void(0);" role="button" class="btn md naver">네이버로 로그인하기</a></div>
        </div>
        <!-- 임시 -->
        <div class="center mgt32 mgb32">or</div>
        <!-- //임시 -->
        <v-form class="form_wrap" ref="form">

          <div class="form_group">
            <div class="form_item">
              <v-text-field placeholder="이메일 입력" variant="outlined" :rules="emailRules" required hide-details="auto" clearable></v-text-field>
            </div>
            <div class="form_item">
              <v-text-field type="password" placeholder="비밀번호 입력" variant="outlined" :rules="[rules.required]" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn lg c01" @click="validate">로그인</button>
          </div>
        </v-form>
        <div class="acc_set">
          <ul>
            <li><a href="javascript:void(0);" target="_blank" title="새 창 열림" >이메일 찾기</a></li>
            <li><a href="javascript:void(0);">비밀번호 재설정</a></li>
            <li><a href="javascript:void(0);">회원가입</a></li>
          </ul>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG01-PG00-vuetify',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      rules:{
        required: v => !!v || '비밀번호는 필수입니다'
      },
      // name:'',
      emailRules: [
        v => !!v || '이메일은 필수입니다',
        v => (v && v.length >= 5) || '이메일은 5자 이상 입력주세요',
      ],
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '로그인' },
    }
  },
  methods: {
    async validate () {
        const { valid } = await this.$refs.form.validate()

        //if (valid) alert('Form is valid')
      },
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
