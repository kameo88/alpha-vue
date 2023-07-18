<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">USIM을 <br>가지고 계신가요?</div>

      <div class="section">
        <div class="item_list radio_active">
          <ul>
            <li>
              <div class="radio_ty02 ty02">
                <input type="radio" id="step03_01" name="step03" value="step03_01" v-model="checked">
                <label for="step03_01">
                  <span class="text_box">
                    <span class="desc">
                      USIM이 있어요
                    </span>
                    <span class="info">
                      즉시 셀프개통 할 수 있어요!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_usim.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_ty02 ty02">
                <input type="radio" id="step03_02" name="step03" value="step03_02" v-model="checked">
                <label for="step03_02">
                  <span class="text_box">
                    <span class="desc">
                      USIM이 없어요
                    </span>
                    <span class="info">
                      USIM이 없어도 개통할 수 있어요!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_usim_no.png" alt="">
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div> <!-- // section-->

      <div class="section bottom_link_item" v-if="usimbuy">
        <strong>USIM을 구매하고 셀프개통 하시겠어요?</strong>
        <div class="bnr_area">
          <a href="javascript:void(0);">
            <img src="@/assets/images/data/img_bnr03.png" alt="바로배송 2시간이면 OK!">
          </a>
        </div>
        <strong>USIM없이 eSIM으로 개통하시겠어요?</strong>
        <a href="javascript:void(0);" class="text_btn">eSIM 지원 휴대폰 확인하러 가기</a>
      </div> <!-- // section-->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">{{ nextBtn }}</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PG02',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'USIM 여부 선택', floatMenu: 'none' },
      popupItem: [],
      next: false,
      nextBtn: '다음으로',
      checked: '',
      usimbuy: false,
    }
  },
  watch: {
    checked(a){
      this.usimbuy = ( a == 'step03_02' ) ? true : false;
      this.nextBtn = ( a == 'step03_02' ) ? '다음으로(택배배송)' : '다음으로';
      this.next = true;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    // this.$emit('popupItem', this.popupItem);
  },
}
</script>
  