<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_popup06" @click="$popup.open('#popup06', '#btn_popup06');">약관 상세</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_popup06_2" @click="$popup.open('#popup06_2', '#btn_popup06_2');">위치정보 활용 동의</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM06-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '공통' },
      popupItem: ['popup06', 'popup06_2'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#popup06', '#btn_popup06'); }, 100);
    
  },
}
</script>
