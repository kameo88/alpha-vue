<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      <div class="page_info">accordion</div>

      <div class="section">
        <h3 class="tit02">accordion</h3>
        
        <v-expansion-panels class="acd_wrap" v-model="acd">
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

      </div>
      
      <div class="section">
        <h3 class="tit02">toggle</h3>

        <v-expansion-panels class="acd_wrap"  v-model="toggle" multiple>
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법 toggle</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법 toggle</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty02">
            <div class="acd_title">
              <div class="acd_tab">
                <div class="check_st">
                    <input type="checkbox" id="check_consent01_all" name="">
                    <label for="check_consent01_all">+알파 동의항목</label>
                </div>
              </div>
              <v-expansion-panel-title></v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

        </v-expansion-panels>
      </div>








      

      <div class="section">
        <h3 class="tit03">요금제 상세정보</h3>

        <v-expansion-panels class="acd_wrap"  v-model="acd2" multiple>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>초과 이용 요금 toggle</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="ove_charge">
                  <dl class="div01">
                    <dt>음성(초)</dt>
                    <dd>1.98원</dd>
                  </dl>
                  <dl class="div02">
                    <dt>영상(초)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div03">
                    <dt>SMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div04">
                    <dt>LMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div05">
                    <dt>MMS(건)</dt>
                    <dd>220원</dd>
                  </dl>
                  <dl class="div06">
                    <dt>데이터(MB)</dt>
                    <dd>22.58원</dd>
                  </dl>
                </div>

                <ul class="text_list_bull">
                  <li>SMS : 단문 Text형 문자 (한글 70자/영문 140자 이하)</li>
                  <li>LMS : 장문 Text형 문자 (한글 71자/영문 141자 이상)</li>
                  <li>MMS : 멀티미디어형 문자 (사진, 동영상)</li>
                  <li>VAT 포함</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>데이터(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list_bull">
                  <li>데이터(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>음성(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list_bull">
                  <li>음성(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>메시지(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list_bull">
                  <li>메시지(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>유의사항</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list_bull">
                  <li>유의사항</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div> <!-- // section -->


    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script>

export default {
  name: "GuideAccorion",
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      acd: [1],
      acd2: [0],
      toggle: [0],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
};
</script>
<style>

</style>
