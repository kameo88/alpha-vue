<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav blind">{{ layout.title }}</h2>

      <div class="section error_area">
          <div class="ttl">
              <h2>서비스에<br>접속할 수 없습니다</h2>
              <p>
                  기술적인 문제로 인해 일시적으로 접속되지 않았습니다.<br>
                  잠시 후 다시 이용 부탁 드리며<br>
                  이용에 불편을 드려 죄송합니다.
              </p>
          </div>
      </div>

      <div class="bottom_float">
          <div class="inner">
              <div class="float_btn_wrap">
                  <div class="btn_group">
                      <button type="button" class="btn lg c01"><sup>+</sup>알파 홈으로 가기</button>
                  </div>
              </div>
          </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM01-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '안내' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);    
  },
}
</script>
