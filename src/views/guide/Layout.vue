<template>
	<div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">title nav</h2>

      <div class="page_info">page info</div>
      
      <div class="section">
        <h3 class="tit02">section</h3>
        
        content
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">section</h3>
        
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content
      </div> <!-- // section -->

      <div class="section ty02">
        <h3 class="tit02">section ty02</h3>
        
        content
      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01">button</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn lg c02">button</button>
              <button type="button" class="btn lg c03">button</button>
            </div>
          </div>
          <!-- plan_join -->
          <!-- compare_pop -->
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
	</div> <!-- // container -->

</template>

<script>

export default {
  name: 'GuideLayout',
  emits: ['popupItem'],
}
</script>