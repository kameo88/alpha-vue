<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">요금제 상세</h3>
        <button type="button" class="btn md c03" id="btn_findRatePlan08" @click="$popup.open('#findRatePlan08', '#btn_findRatePlan08');">내게 맞는 요금제 찾기 Step06</button>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR02-PO08',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', title: '내게 맞는 요금제 찾기', floatMenu: 'none' },
      popupItem: ['popup01', 'findRatePlan08'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#findRatePlan08', '#btn_findRatePlan08') }, 100);
  }
}
</script>