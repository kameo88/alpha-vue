<template>
  <div class="wrap">
    <CompHeader />

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>
          
        <div class="page_info">accordion</div>

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
/* .expanded-enter-active, .expanded-leave-active {
  transition: opacity .5s;
}
.expanded-enter, .expanded-leave-to {
  opacity: 0;
} */


/* .expanded-enter-active,
.expanded-leave-active {
  transition: opacity 0.3s ease;
}

.expanded-enter-from,
.expanded-leave-to {
  opacity: 0;
} */


.expanded-enter-from{opacity:0; height:0; transition:all 2s;}
.expanded-enter-active{transition:all 2s;}
.expanded-enter-to{opacity:1; height:auto; transition:all 2s;}

.expanded-leave-from{opacity:1; height:auto; transition:all 2s;}
.expanded-leave-active{transition:all 1s;}
.expanded-leave-to{opacity:0; height:0; transition:all 2s;}
</style>
