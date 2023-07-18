<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">요금제 상세</h3>
        <button type="button" class="btn md c03" id="btn_findRatePlan07" @click="$popup.open('#findRatePlan07', '#btn_findRatePlan07');">내게 맞는 요금제 찾기 Step06</button>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR02-PO07',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', title: '내게 맞는 요금제 찾기', floatMenu: 'none' },
      popupItem: ['popup01', 'findRatePlan07'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#findRatePlan07', '#btn_findRatePlan07') }, 100);
  }
}
</script>