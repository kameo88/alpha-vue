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
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_item val_chk"><!-- class="form_item val_chk" -->
              <div class="input_box">
                <input type="text" class="input" placeholder="이메일 입력">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">이메일을 입력해주세요</div>
            <div class="error">이메일 형식을 확인해주세요</div>

            <div class="form_item"><!-- class="form_item val_chk" -->
              <div class="input_box">
                <input type="password" class="input" placeholder="비밀번호 입력">
                <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
              </div>
            </div>
            <div class="error">비밀번호를 입력해주세요</div>
            <div class="error">비밀번호를 다시 확인해주세요</div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn lg c01">로그인</button>
          </div>
        </div>
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
  name: 'ALFM-LG01-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '로그인' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
