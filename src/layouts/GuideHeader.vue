<template>

  <header>
    <div class="cont_area">
      <h1><router-link to="/"><img src="../assets/images/common/logo_plusalpha.png" alt="+알파"></router-link> : {{ page[pageOn].name }}</h1>
      <p class="info"><span>2023.05.26</span> Last updata</p>
      <div class="proc_wrap">
        <div class="proc">
          <p>페이지 수 : <strong>{{ pageInfo.total }}</strong></p>
          <p>완료된 페이지 수 : <strong>{{ pageInfo.end }}</strong></p>
          <p>진행율 : <strong>{{ pageInfo.per }}%</strong></p>
        </div>
      </div>
      <ul class="tab_nav">
        <li v-for="(a, i) in page" :key="i" :class="{ on : pageOn==i }">
          <router-link :to="`${a.path}`">{{ a.name }}</router-link>
        </li>
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
  props : {
    page: Object,
    pageOn: Number,
    pageInfo: Object,
  },
}
</script>