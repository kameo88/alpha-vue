<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <div class="section">
        <button type="button" class="btn md c03" id="btn_popup12" @click="$popup.open('#popup12', '#btn_popup12');">공유하기</button>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM12-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '공통' },
      popupItem: ['popup12'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#popup12', '#btn_popup12') }, 100);
  },
}
</script>
