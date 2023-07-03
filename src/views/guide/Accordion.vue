<template>
  <div class="wrap">

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

      </div> <!-- // content -->
    </div> <!-- // container -->
  </div><!-- // wrap -->

</template>

<script>

export default {
  name: "GuideAccorion",
  data(){
    return {
      acd: [1],
      toggle: [0],
    }
  },
};
</script>
<style>

</style>
