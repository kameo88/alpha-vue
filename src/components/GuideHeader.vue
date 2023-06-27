<template>

  <header>
    <div class="cont_area">
      <h1><router-link to="/"><img src="../assets/images/common/logo_plusalpha.png" alt="+알파"></router-link> : </h1>
      <p class="info"><span>2023.05.26</span> Last updata</p>
      <div class="proc_wrap"></div>
      <ul class="tab_nav">
        <li><router-link to="/ListGuide">Guide</router-link></li>
        <li><router-link to="/ListCommon">공통, etc</router-link></li>
        <li><router-link to="/ListMain">메인</router-link></li>
        <li><router-link to="/ListUsim">유심구매</router-link></li>
        <li><router-link to="/ListRatePlan">요금제</router-link></li>
        <li><router-link to="/ListBeneFit">혜택</router-link></li>
        <li><router-link to="/ListCS">고객지원</router-link></li>
        <li><router-link to="/ListMypage">마이페이지</router-link></li>
        <li><router-link to="/ListLogin">로그인</router-link></li>
        <li><router-link to="/ListFooter">푸터</router-link></li>
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

<script setup>
  //
</script>

<style>
  @import url(../views/guide/guide.css);
</style>
