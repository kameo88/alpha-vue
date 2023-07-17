<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <div class="section">
        <button type="button" class="btn md c03" id="btn_popup10" @click="$popup.open('#popup10', '#btn_popup10');">가입신청 이어하기 안내</button>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM10-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '공통' },
      popupItem: ['popup10'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#popup10', '#btn_popup10') }, 100);
  },
}
</script>
