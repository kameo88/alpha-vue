<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">가입유형을 <br>선택해 주세요</div>

      <div class="section">
        <div class="item_list radio_active">
          <ul>
            <li>
              <div class="radio_ty02 ty02">
                <input type="radio" id="step01_01" name="step01" @change="next = true">
                <label for="step01_01">
                  <span class="text_box">
                    <span class="desc">
                      번호이동
                      <span class="bag_clr_c06">혜택</span>
                    </span>
                    <span class="info">
                      지금 쓰고 있는 내 번호 그대로!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_num_move.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_ty02 ty02">
                <input type="radio" id="step01_02" name="step01" @change="next = true">
                <label for="step01_02">
                  <span class="text_box">
                    <span class="desc">
                      신규가입
                    </span>
                    <span class="info">
                      새로운 번호가 필요해요!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_num_new.png" alt="">
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div> 

      <div class="section">
        <div class="box_gray">
          <strong>셀프개통 업무시간 안내</strong>
          <ul class="text_list_bull">
            <li>신규가입 : 오전8시 ~ 오후 8시 (평일/토요일)</li>
            <li>번호이동 : 오전10시 ~ 오후 8시 (평일/토요일)</li>
          </ul>
        </div>
      </div><!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '가입유형 선택', floatMenu: 'none' },
      popupItem: [],
      next: false,
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    // this.$emit('popupItem', this.popupItem);
  },
}
</script>
  