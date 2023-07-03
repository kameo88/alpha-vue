<template>
  <div class="wrap">
    <CompHeader />

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>
          
        <div class="page_info">accordion</div>


        <div class="section">
          <h3 class="tit02">accordion VUETIFY</h3>
          
          <v-expansion-panels class="acd_wrap"  v-model="acd">
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
          <h3 class="tit02">toggle VUETIFY</h3>

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
          <h3 class="tit02">accordion</h3>
          
          <div class="acd_st acdItem on">
            <a href="#" role="button" aria-expanded="true" class="acd_btn" @click="$accordion.click">일련번호 확인 방법</a>
            <div class="acd_panel" role="region">
              일련번호 확인 방법
            </div>
          </div>

          <div class="acd_st acdItem">
            <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$accordion.click">일련번호 확인 방법</a>
            <div class="acd_panel" role="region">
              일련번호 확인 방법
            </div>
          </div>

          <div class="acd_st acdItem tog" :class="{ on : elementToggle}">
            <!-- <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$toggle.click">일련번호 확인 방법  toggle</a> -->
            <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="expandedClick">일련번호 확인 방법  toggle</a>
            <transition name="expanded">
              <div class="acd_panel" role="region" v-if="elementToggle">
                일련번호 확인 방법
              </div>
            </transition>
          </div>

          <div class="acd_st acdItem tog">
            <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$toggle.click">일련번호 확인 방법 toggle</a>
            <div class="acd_panel" role="region">
              일련번호 확인 방법
            </div>
          </div>

          <div class="acd_st acdItem tog">
            <div class="acd_tab">
              <div class="check_st">
                <input type="checkbox" id="check_consent01_all" name="">
                <label for="check_consent01_all">+알파 동의항목</label>
              </div>
              <button type="button" aria-expanded="false" @click="$toggle.click"><span class="blind">보기</span></button>
            </div>
            <div class="acd_panel" role="region">
              일련번호 확인 방법
            </div>
          </div>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">acdItem_wrap</h3>
          
          <div class="acdItem_wrap">
            <div class="acd_st acdItem on">
              <a href="#" role="button" aria-expanded="true" class="acd_btn" @click="$accordion.click">일련번호 확인 방법</a>
              <div class="acd_panel" role="region">
                일련번호 확인 방법
              </div>
            </div>

            <div class="acd_st acdItem">
              <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$accordion.click">일련번호 확인 방법</a>
              <div class="acd_panel" role="region">
                일련번호 확인 방법
              </div>
            </div>

            <div class="acd_st acdItem">
              <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$accordion.click">일련번호 확인 방법</a>
              <div class="acd_panel" role="region">
                일련번호 확인 방법
              </div>
            </div>
          </div>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">acdItem_wrap toggle</h3>

          <div class="acdItem_wrap tog">
            <div class="acd_st acdItem on">
              <a href="#" role="button" aria-expanded="true" class="acd_btn" @click="$toggle.click">일련번호 확인 방법</a>
              <div class="acd_panel" role="region">
                일련번호 확인 방법
              </div>
            </div>

            <div class="acd_st acdItem">
              <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$toggle.click">일련번호 확인 방법</a>
              <div class="acd_panel" role="region">
                일련번호 확인 방법
              </div>
            </div>

            <div class="acd_st acdItem">
              <a href="#" role="button" aria-expanded="false" class="acd_btn" @click="$toggle.click">일련번호 확인 방법</a>
              <div class="acd_panel" role="region">
                일련번호 확인 방법
              </div>
            </div>
          </div>

        </div> <!-- // section -->

      </div> <!-- // content -->
    </div> <!-- // container -->

  </div><!-- // wrap -->

</template>

<script>
import CompHeader from "@/components/Header.vue";

export default {
  name: "GuideAccorion",
  data(){
    return {
      elementToggle: false,
      expanded: false,
      acd: [0],
      toggle: [0],

    }
  },
  methods: {
    expandedClick(){
      this.elementToggle = !this.elementToggle
    }
  },
  components: {
    CompHeader,
  },
};
</script>
<style>
/* vuetify accordion reset */
.acd_wrap .v-expansion-panel:not(:first-child)::after {display:none}
.acd_wrap .acd_item .v-expansion-panel__shadow{display:none;}
.acd_wrap .v-expansion-panel-title__overlay{display:none;}
.acd_wrap .v-expansion-panels.acd_item {border-radius:1.2rem!important; border-bottom-left-radius:1.2rem !important; border-bottom-right-radius: 1.2rem !important; overflow:hidden;}

/* accordion vuetify */
.acd_wrap{}
.acd_wrap .acd_item{background:#f8f8f8; border-radius:1.2rem!important; overflow:hidden;}
.acd_wrap .acd_item + .acd_item {margin-top:0.8rem;}
/* .acd_wrap .acd_title{} */
.acd_wrap .acd_title .v-expansion-panel-title{font-size:1.5rem; font-weight:700; line-height:1.8rem; padding:2rem;}
.acd_wrap .acd_title .v-expansion-panel-title__icon .v-icon{width:2.4rem; height:2.4rem;}
.acd_wrap .acd_title .v-expansion-panel-title__icon .v-icon::before{content:''; display:block; width:2.4rem; height:2.4rem; background: url(/src/assets/images/common/ico_arrowB02.png) no-repeat center / 100% auto;}
.acd_wrap .acd_title .v-expansion-panel-title--active .v-expansion-panel-title__icon .v-icon::before{transform: rotate(180deg);}
.acd_wrap .acd_panel{overflow:hidden;}
.acd_wrap .acd_panel .v-expansion-panel-text__wrapper{padding:0 2rem 2rem;}


/* accordion vuetify ty02 */
.acd_wrap .acd_item.ty02 .acd_title{display:flex; align-items:center; justify-content:space-between; width:100%; padding:1.7rem 2rem;}
.acd_wrap .acd_item.ty02 .acd_title .v-expansion-panel-title{width:2.4rem; height:2.4rem; padding:0; min-height:auto;}
.acd_wrap .acd_item.ty02 .acd_title .acd_tab{font-size:1.5rem;}

</style>
