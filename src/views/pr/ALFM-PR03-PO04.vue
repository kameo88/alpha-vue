<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">eSIM 미지원 단말기</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_ALFMPR03PO04" @click="$popup.open('#ALFMPR03PO04', '#btn_ALFMPR03PO04');">Alert</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO04',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'eSIM 정보 입력', floatMenu: 'none' },
      popupItem: ['ALFMPR03PO04'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    setTimeout(() => { this.$popup.open('#ALFMPR03PO04', '#btn_ALFMPR03PO04') }, 100);
  }
}
</script>