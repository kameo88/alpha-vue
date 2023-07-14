<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">flag & badge</div>
      
      <div class="section">
        <h3 class="tit02">btn badge</h3>
        <button type="button" class="btn bag c01" :class="{ on : flag[0] }" @click="flag[0] = !flag[0]"><span class="blind">찜하기</span>480</button>
        <button type="button" class="btn bag c02" :class="{ on : flag[1] }" @click="flag[1] = !flag[1]">비교하기</button>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">text badge</h3>
        <span class="bag_clr_c01">유심판매</span>
        <span class="bag_clr_c02">바로픽업</span>
        <span class="bag_clr_c03">답변완료</span>
        <span class="bag_clr_c04">결합할인</span>
        <span class="bag_clr_c05">회원가입</span>
        <span class="bag_clr_c06">혜택</span>
        <span class="bag_clr_c07">도로명</span>
        <span class="bag_clr_c08">도로명</span>
        <span class="bag_clr_c09">도로명</span>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">event badge</h3>
        <span class="bag_evt_d">D-24</span>
        <span class="bag_evt_ty01">제휴카드</span>
        <span class="bag_evt_ty02">제휴카드</span>
        <span class="bag_evt_ty03">제휴카드</span>
        <span class="bag_evt_ty04">제휴카드</span>
      </div> <!-- // section -->
      
    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideFlag',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      flag: [false, false],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
