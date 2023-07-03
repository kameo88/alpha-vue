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
        <v-btn @click="tooltip[0] = !tooltip[0]" id="test">tooltip</v-btn>
          
        <v-tooltip v-model="tooltip[0]" activator="#test" location="bottom">
          Tooltippp
        </v-tooltip>
        


        <v-tooltip text="데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요" bottom>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">Tooltip</v-btn>
          </template>
        </v-tooltip>

        <!-- <v-tooltip v-model="tooltip[0]" location="bottom">
          <template>
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip> -->
      </div>
      



      <div class="section">
        <h3 class="tit02">tooltip</h3>

        데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
        <span class="tooltip">
          <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
          <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
        </span>

        <br><br><br><br>

        데이터 소진 시 유튜브 화질 1080p로
        <span class="tooltip">
          <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
          <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
        </span>
        원활히 볼 수 있어요

        <br><br><br><br>

        
        <span class="tooltip">
          <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
          <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
        </span>
        데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuidePopup',
  data(){
    return {
      tooltip: [false, false, false],
    }
  }
}
</script>