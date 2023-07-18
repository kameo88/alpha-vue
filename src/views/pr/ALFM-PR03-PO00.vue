<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">요금제 선택 > STEP1_가입유형 선택</h3>
        <h3 class="tit02">셀프개통 불가</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_ALFMPR03PO00" @click="$popup.open('#ALFMPR03PO00', '#btn_ALFMPR03PO00');">Alert</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '가입유형 선택', floatMenu: 'none' },
      popupItem: ['ALFMPR03PO00'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#ALFMPR03PO00', '#btn_ALFMPR03PO00') }, 100);
  }
}
</script>