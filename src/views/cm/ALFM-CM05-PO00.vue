<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <div class="section">
        <button type="button" class="btn md c03" id="btn_popup05" @click="$popup.open('#popup05', '#btn_popup05');">⁠우편번호 검색</button>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM05-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '공통' },
      popupItem: ['popup05'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#popup05', '#btn_popup05'); }, 100);
    
  },
}
</script>
