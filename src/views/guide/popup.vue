<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Popup</div>

      <div class="section">
        <h3 class="tit02">Popup 추가하기</h3>
        <ul class="text_list_bull">
          <li>
            팝업을 부를 페이지에 popupItem 데이터 추가, $emit 추가<br>
            ex)<br>
<pre>
data(){
  return {
    <b>popupItem: ['popup01', 'popup02', 'popup03', 'noticePop'],</b>
  }
},
mounted(){
  this.$emit('popupItem', this.popupItem);
}
</pre>
          </li>
          <li>/src/components/Popup.vue에 띄워질 팝업 마크업 추가</li>
        </ul>
        

      </div>
      
      <div class="section">
        <h3 class="tit02">Popup Alert</h3>
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');">Alert</button>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <h3 class="tit02">Popup Normal</h3>
        <div class="btn_group">
          <button type="button" class="btn lg c02" id="btn_popup02" @click="$popup.open('#popup02', '#btn_popup02');">Normal</button>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <h3 class="tit02">Popup Full</h3>
        <div class="btn_group">
          <button type="button" class="btn lg c03" id="btn_popup03" @click="$popup.open('#popup03', '#btn_popup03');">Full</button>
        </div>
      </div> <!-- // section -->
      
      <div class="section">
        <h3 class="tit02">Popup notice</h3>
        <div class="btn_group">
          <button type="button" class="btn lg c04" id="btn_noticePop" @click="$popup.open('#noticePop', '#btn_noticePop');">notice</button>
        </div>
      </div> <!-- // section -->





      <div class="section">
        <h3 class="tit02">tooltip VUETIFY</h3>

        <div>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <v-btn id="tooltip0" class="tooltip_btn" :class="{on : tooltip[0]}" title="툴팁" @click="tooltip[0] = !tooltip[0]">툴팁</v-btn>
          <v-tooltip v-model="tooltip[0]" activator="#tooltip0" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>

        <br><br><br><br>

        <div>
          데이터 소진 시 유튜브 화질 1080p로 <v-btn id="tooltip1" class="tooltip_btn" :class="{on : tooltip[1]}" title="툴팁" @click="tooltip[1] = !tooltip[1]">툴팁</v-btn> 원활히 볼 수 있어요
          <v-tooltip v-model="tooltip[1]" activator="#tooltip1" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>
        
        <br><br><br><br>

        <div>
          <v-btn id="tooltip2" class="tooltip_btn" :class="{on : tooltip[2]}" title="툴팁" @click="tooltip[2] = !tooltip[2]">툴팁</v-btn>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <v-tooltip v-model="tooltip[2]" activator="#tooltip2" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>
        
        <br><br><br><br>

        <div style="width:30rem; margin:0 auto; padding:2rem; position:relative; border:1px solid #ddd; border-radius:1.2rem;">
          데이터 소진 시 유튜브 화질 1080p로
          <v-btn id="tooltip3" class="tooltip_btn" :class="{on : tooltip[3]}" title="툴팁" @click="tooltip[3] = !tooltip[3]">툴팁</v-btn>
          원활히 볼 수 있어요
          contained
          <v-tooltip v-model="tooltip[3]" activator="#tooltip3" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation contained>
            <div class="tooltip_content">
              v-tooltip contained 옵션, 부모에 position:relative
            </div>
          </v-tooltip>
        </div>



        <br><br><br><br>


      </div>
      

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import '@/assets/js/swiper-bundle.min.js';
import '@/assets/css/swiper-bundle.css';

export default {
  name: 'GuidePopup',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      popupItem: ['popup01', 'popup02', 'popup03', 'noticePop', 'userReviewPop'],
      tooltip: [false, false, false, false, false],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
    // setTimeout(() => { this.$swiper.notice() }, 50);
  }
}
</script>