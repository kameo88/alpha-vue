<template>
  <div class="wrap">

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">PC 페이지 nav (class="title_nav") Guide</h2>

        <div class="page_info">페이지 안내 (class="page_info") page info</div>
        
        <div class="section">
          <h3 class="tit02">sub title in section (class="tit02")</h3>
          <h3 class="tit03">sub title in section (class="tit03")</h3>

          <div class="tit_wrap">
            <h3 class="tit03">title (class="tit03")</h3>
            <a href="javascript:void(0);" class="more">더보기</a>
          </div>

          body (font-size:1.4rem; line-height:2rem; color:#222;)

          <div class="share_box">
            <span>text</span>
            <button type="button" class="share_btn" id="btn_share" @click="$popup.open('#sharePop', '#btn_share');"><span class="blind">공유하기</span></button>

          </div>
        </div> <!-- // section -->

        <div class="section">
            <h3 class="tit02">text_list_bull</h3>
            
            <ul class="text_list_bull">
                <li>
                    비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.
                    <ul class="text_list_dash">
                        <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                        <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
                    </ul>
                </li>
                <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
            </ul>

            <ul class="text_list_bull">
                <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
            </ul>
        </div> <!-- // section -->

        <div class="section">
            <h3 class="tit02">text_list_dash</h3>
            
            <ul class="text_list_dash">
                <li>
                    비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.
                    <ul class="text_list_bull">
                        <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                        <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
                    </ul>
                </li>
                <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
            </ul>

            <ul class="text_list_dash">
                <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
            </ul>
        </div> <!-- // section -->

        <div class="section">
            <h3 class="tit02">text_info</h3>
            
            <div class="text_info">종료일 기준으로 최근 2개월간 지난 이벤트 조회가 가능합니다</div>
        </div> <!-- // section -->

        <div class="section">
            <h3 class="tit02">box</h3>
            
            <div class="box_gray">
                <ul class="text_list_bull">
                    <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                    <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
                </ul>
            </div>

            <div class="box_line">
                <ul class="text_list_bull">
                    <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                    <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
                </ul>
            </div>

            <div class="box_red">
                <ul class="text_list_bull">
                    <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                    <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
                </ul>
            </div>

            <div class="box_yellow">
                <ul class="text_list_bull">
                    <li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
                    <li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
                </ul>
            </div>
        </div> <!-- // section -->


      </div> <!-- // content -->
    </div><!-- // container -->

  </div>
  <!-- // wrap -->

  <div class="pop_layer alert" id="sharePop">
      <div class="pop_wrap">
          <div class="pop_header">
              <h3>공유하기</h3>
          </div>
          <div class="pop_content">
              <div class="cir_icon_link">
                  <ul>
                      <li>
                          <a href="javascript:void(0);" class="facebook_icon_link"> <!-- onclick="popUp.close('#popup01', '#btn_popup01');" -->
                              <span>페이스북</span>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:void(0);" class="kakao_icon_link">
                              <span>카카오톡</span>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:void(0);" class="url_icon_link">
                              <span>URL 복사</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="pop_footer">
              <div class="group_btn">
                  <button type="button" class="btn_sS_c02" data-action="close" @click="$popup.close('#sharePop', '#btn_share')">닫기</button>
                  
              </div>
          </div>
      </div>
  </div> <!-- // pop_layer -->

</template>

<script>
export default {
  name: 'GuideText',
}
</script>
