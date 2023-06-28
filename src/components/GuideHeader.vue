<template>

  <header>
    <div class="cont_area">
      <h1><router-link to="/"><img src="../assets/images/common/logo_plusalpha.png" alt="+알파"></router-link> : {{ page[pageOn].name }}</h1>
      <p class="info"><span>2023.05.26</span> Last updata</p>
      <div class="proc_wrap"></div>
      <ul class="tab_nav">
        <li v-for="(a, i) in page" :key="i" :class="{ on : pageOn==i }">
          <router-link :to="`${a.path}`" @click="changeGuidePage(i)">{{ a.name }}</router-link>
        </li>
        <!-- <li><a href="/ListGuide">Guide</a></li>
        <li><a href="/ListCommon">공통, etc</a></li>
        <li><a href="/ListMain">메인</a></li>
        <li><a href="/ListUsim">유심구매</a></li>
        <li><a href="/ListRatePlan">요금제</a></li>
        <li><a href="/ListBeneFit">혜택</a></li>
        <li><a href="/ListCS">고객지원</a></li>
        <li><a href="/ListMypage">마이페이지</a></li>
        <li><a href="/ListLogin">로그인</a></li>
        <li><a href="/ListFooter">푸터</a></li> -->
      </ul>
      <div class="marker">
        <ul>
          <li class="com">컨펌 진행중</li>
          <li class="end">퍼블완료</li>
          <li class="mod">수정</li>
        </ul>
      </div>
    </div>
  </header>


</template>

<script>
export default {
  name: 'GuideHeader',
  methods:{
    changeGuidePage(num){
      this.$emit('changeGuidePage', num);
    }
  },
  props : {
    page: Object,
    pageOn: Number,
  },
}
</script>

<style>
  @import url(../views/guide/guide.css);
</style>
