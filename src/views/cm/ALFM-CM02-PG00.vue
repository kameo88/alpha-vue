<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav blind">{{ layout.title }}</h2>

      <div class="section">
          <div class="btn_group">
              <button type="button" class="btn md c03" id="btn_inspectionPopup01" @click="$popup.open('#inspectionPopup01', '#btn_inspectionPopup01');">서비스 점검중 (팝업)</button>
          </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM02-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '안내' },
      popupItem: ['inspectionPopup01'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#inspectionPopup01', '#btn_inspectionPopup01'); }, 100);
  },
}
</script>
