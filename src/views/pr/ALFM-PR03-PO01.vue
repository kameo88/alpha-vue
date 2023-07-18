<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">이미지 업로드 가이드 팝업</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_ALFMPR03PO01" @click="$popup.open('#ALFMPR03PO01', '#btn_ALFMPR03PO01');">이미지 업로드 가이드 팝업</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO01',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'eSIM 정보 입력', floatMenu: 'none' },
      popupItem: ['ALFMPR03PO01'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#ALFMPR03PO01', '#btn_ALFMPR03PO01') }, 100);
  }
}
</script>