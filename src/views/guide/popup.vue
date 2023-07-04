<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Popup</div>
      
      <div class="section">
        <h3 class="tit02">Popup Alert</h3>
        <div class="group_btn">
          <button type="button" class="btn_sL_c01" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');">Alert</button>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <h3 class="tit02">Popup Normal</h3>
        <div class="group_btn">
          <button type="button" class="btn_sL_c02" id="btn_popup02" @click="$popup.open('#popup02', '#btn_popup02');">Normal</button>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <h3 class="tit02">Popup Full</h3>
        <div class="group_btn">
          <button type="button" class="btn_sL_c03" id="btn_popup03" @click="$popup.open('#popup03', '#btn_popup03');">Full</button>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <h3 class="tit02">Popup notice</h3>
        <div class="group_btn">
          <button type="button" class="btn_sL_c04" id="btn_noticePop" @click="$popup.open('#noticePop', '#btn_noticePop');">notice</button>
        </div>
      </div> <!-- // section -->


      <div class="section">
        <h3 class="tit02">tooltip VUETIFY</h3>

        <div>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <v-btn id="tooltip0" class="tooltip_btn" :class="{on : tooltip[0]}" title="툴팁" @click="tooltip[0] = !tooltip[0]">툴팁</v-btn>
          <v-tooltip v-model="tooltip[0]" activator="#tooltip0" location="bottom" offset="0" transition="false" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>

        <br><br><br><br>

        <div>
          데이터 소진 시 유튜브 화질 1080p로 <v-btn id="tooltip1" class="tooltip_btn" :class="{on : tooltip[1]}" title="툴팁" @click="tooltip[1] = !tooltip[1]">툴팁</v-btn> 원활히 볼 수 있어요
          <v-tooltip v-model="tooltip[1]" activator="#tooltip1" location="bottom" offset="0" transition="false" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>
        
        <br><br><br><br>

        <div>
          <v-btn id="tooltip2" class="tooltip_btn" :class="{on : tooltip[2]}" title="툴팁" @click="tooltip[2] = !tooltip[2]">툴팁</v-btn>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <v-tooltip v-model="tooltip[2]" activator="#tooltip2" location="bottom" offset="0" transition="false" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>

      </div>
      

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import '@/assets/js/swiper-bundle.min.js';
import '@/assets/css/swiper-bundle.css';

export default {
  name: 'GuidePopup',
  data(){
    return {
      tooltip: [false, false, false],
    }
  },
  mounted(){
    this.$swiper.notice();
  }
}
</script>