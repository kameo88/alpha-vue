<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">요금제 상세</h3>
        <button type="button" class="btn md c03" id="btn_findRatePlan02" @click="$popup.open('#findRatePlan02', '#btn_findRatePlan02');">내게 맞는 요금제 찾기 Step02</button>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR02-PO02',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', title: '내게 맞는 요금제 찾기', floatMenu: 'none' },
      popupItem: ['popup01', 'findRatePlan02'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#findRatePlan02', '#btn_findRatePlan02') }, 100);
  }
}
</script>