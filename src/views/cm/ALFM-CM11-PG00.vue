<template>

  <div class="container">
    <div class="content fullH error_ie_area" id="content">
      <h2 class="title_nav blind">{{ layout.title }}</h2>

      <div class="section">
        <div class="ttl">
          <h2>홈페이지 이용 안내</h2>
          <p>
            +알파 홈페이지는 마이크로 소프트사의 Internet Explorer 11 사용 중지 예정으로 인해,<br>
            접속하신 웹 브라우저에서 사이트 접속이 제한됩니다.
          </p>
        </div>
        <div class="cont">
          <strong>Microsoft Internet Explorer 11 사용 중지 예정</strong>
          <span>
            Internet Explorer 11은 2022년 6월 15일에 사용 중지되고, 지원이 중단될 예정입니다.<br>
            깊은 양해 부탁 드리며, 아래의 웹 브라우저를 사용하시면 빠르고, 안전하게 홈페이지를 이용하실 수 있습니다.<br>
            더욱 편리한 서비스를 위해 최선을 다하겠습니다.<br>
            감사합니다.
          </span>
          <ul>
            <li class="chrome">Chrome</li>
            <li class="edge">Microsoft Edge</li>
            <li class="safari">Safari</li>
            <li class="firefox">firefox</li>
          </ul>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM11-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'none', footer: 'none', title: '안내', floatMenu: 'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);    
  },
}
</script>
