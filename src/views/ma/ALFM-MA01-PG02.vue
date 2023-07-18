<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        <span class="fc01"><sup>+</sup>알파</span>와 함께하고 있는 <br>참여사업자입니다
        <p class="sub">로고를 선택하시면, 더 자세한 정보를 볼 수 있어요!</p>
      </div>
      
      <div class="section">

        <ul class="select_list02">
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner01.png" alt="">
              </span>
              <span class="tex">A모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner02.png" alt="">
              </span>
              <span class="tex">FLASH모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner03.png" alt="">
              </span>
              <span class="tex">KG모빌리언스</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner04.png" alt="">
              </span>
              <span class="tex">U+유모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner05.png" alt="">
              </span>
              <span class="tex">WELL</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner06.png" alt="">
              </span>
              <span class="tex">freeT</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner07.png" alt="">
              </span>
              <span class="tex">mobing</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner08.png" alt="">
              </span>
              <span class="tex">리브모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner09.png" alt="">
              </span>
              <span class="tex">마블프로듀스</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner10.png" alt="">
              </span>
              <span class="tex">벨류컴</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner11.png" alt="">
              </span>
              <span class="tex">슈가모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner12.png" alt="">
              </span>
              <span class="tex">스노우맨</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner13.png" alt="">
              </span>
              <span class="tex">스마텔</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner14.png" alt="">
              </span>
              <span class="tex">아이즈모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner15.png" alt="">
              </span>
              <span class="tex">앤텔레콤</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner16.png" alt="">
              </span>
              <span class="tex">에스원안심모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner17.png" alt="">
              </span>
              <span class="tex">여유텔레콤</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner18.png" alt="">
              </span>
              <span class="tex">이야기모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner19.png" alt="">
              </span>
              <span class="tex">이지모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner20.png" alt="">
              </span>
              <span class="tex">인스모바일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner21.png" alt="">
              </span>
              <span class="tex">티플러스</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span class="img">
                <img src="@/assets/images/data/logo_partner22.png" alt="">
              </span>
              <span class="tex">헬로모바일</span>
            </a>
          </li>
        </ul><!-- select_list02 -->

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-MA01-PG02',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '파트너사 소개' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
