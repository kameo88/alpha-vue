<template>

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>

        <div class="page_info">Button</div>

        <div class="section">

          <h3 class="tit02">button</h3>
            
          <a href="javascript:void(0);" role="button" class="btn xsm c01">button</a>
          <button type="button" class="btn xsm c01">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn sm c01">button</a>
          <button type="button" class="btn sm c01">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c01">button</a>
          <button type="button" class="btn md c01">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c01">button</a>
          <button type="button" class="btn lg c01">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn xsm c02">button</a>
          <button type="button" class="btn xsm c02">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn sm c02">button</a>
          <button type="button" class="btn sm c02">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c02">button</a>
          <button type="button" class="btn md c02">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c02">button</a>
          <button type="button" class="btn lg c02">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn xsm c03">button</a>
          <button type="button" class="btn xsm c03">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn sm c03">button</a>
          <button type="button" class="btn sm c03">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c03">button</a>
          <button type="button" class="btn md c03">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c03">button</a>
          <button type="button" class="btn lg c03">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn xsm c04">button</a>
          <button type="button" class="btn xsm c04">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn sm c04">button</a>
          <button type="button" class="btn sm c04">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c04">button</a>
          <button type="button" class="btn md c04">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c04">button</a>
          <button type="button" class="btn lg c04">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn xsm c05">button</a>
          <button type="button" class="btn xsm c05">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn sm c05">button</a>
          <button type="button" class="btn sm c05">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c05">button</a>
          <button type="button" class="btn md c05">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c05">button</a>
          <button type="button" class="btn lg c05">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn xsm c06">button</a>
          <button type="button" class="btn xsm c06">button</button>
          
          <a href="javascript:void(0);" role="button" class="btn sm c06">button</a>
          <button type="button" class="btn sm c06">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c06">button</a>
          <button type="button" class="btn md c06">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c06">button</a>
          <button type="button" class="btn lg c06">button</button>

          <a href="javascript:void(0);" role="button" class="btn xsm c07">button</a>
          <button type="button" class="btn xsm c07">button</button>

          <a href="javascript:void(0);" role="button" class="btn sm c07">button</a>
          <button type="button" class="btn sm c07">button</button>

          <a href="javascript:void(0);" role="button" class="btn md c07">button</a>
          <button type="button" class="btn md c07">button</button>

          <a href="javascript:void(0);" role="button" class="btn lg c07">button</a>
          <button type="button" class="btn lg c07">button</button>

        </div> <!-- // section -->
          
        <div class="section">
          <h3 class="tit02">button disabled</h3>
          
          <a class="btn md c01 disabled">disabled</a>
          <a class="btn md c01" disabled>disabled</a>
          <button type="button" class="btn md c01" disabled>disabled</button>

        </div><!-- // section -->

        <div class="section">
          <h3 class="tit02">button etc</h3>

          <button type="button" class="btn md reset">reset</button>

          <button type="button" class="btn md kakao">kakao</button>
          
          <button type="button" class="btn md naver">naver</button>
          
          <button type="button" class="btn md email">email</button>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">button group</h3>
          
          <div class="btn_group">
            <button type="button" class="btn lg c01">button</button>
          </div>
          <div class="btn_group">
            <button type="button" class="btn lg c02">button</button>
          </div>
          <div class="btn_group">
            <a href="javascript:void(0);" role="button" class="btn lg c01">button button button button</a>
            <button type="button" class="btn lg c01">button</button>
          </div>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">button text</h3>
          <a href="javascript:void(0);" class="text_btn">button text</a>
          <button type="button" class="text_btn ty02">button text type02</button>
          <button type="button" class="text_btn ty03">button text type03</button>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">share btn</h3>
          <button type="button" class="btn_share" id="btn_popup12" @click="$popup.open('#popup12', '#btn_popup12');">공유하기</button>
					<!-- <button type="button" class="btn_share" id="btn_share" @click="$popup.open('#sharePop', '#btn_share');"><span class="blind">공유하기</span></button> -->

          <button type="button" class="btn_share"><span class="blind">공유하기</span></button>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">line arrow btn</h3>
          <button type="button" class="line_btn_arrw">
            <strong>활성화 방법</strong>
          </button>
        </div> <!-- // section -->

      </div> <!-- // content -->
    </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideButton',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      popupItem: ['popup12'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  }
}
</script>
