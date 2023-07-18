<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">개통방식을 <br>선택해 주세요</div>

      <div class="section">
        <div class="item_list radio_active">
          <ul>
            <li>
              <div class="radio_ty02 ty02">
                <input type="radio" id="step02_01" name="step02" @change="next = true">
                <label for="step02_01">
                  <span class="text_box">
                    <span class="desc">
                      USIM 가입
                    </span>
                    <span class="info">
                      기기가 있다면, 빠르고! 간편한!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_usim_join.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_ty02 ty02">
                <input type="radio" id="step02_02" name="step02" @change="next = true">
                <label for="step02_02">
                  <span class="text_box">
                    <span class="desc">
                      eSIM 가입
                    </span>
                    <span class="info">
                      1개의 휴대폰에 2개의 전화번호!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_esim_join.png" alt="">
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div> 

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
  name: 'ALFM-PR03-PG01',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '개통방식 선택', floatMenu: 'none' },
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
  