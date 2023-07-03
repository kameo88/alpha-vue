<template>
	<div class="wrap">
		<GuideHeader :page="page" :pageOn="pageOn" :pageInfo="pageInfo" @changeGuidePage="changeGuidePage" />
		<router-view />
	</div>
</template>

<script>
import GuideHeader from '@/layouts/GuideHeader.vue'

export default {
  name: 'GuideLayout',
  data(){
    return {
      page: [
              { "name" : "Guide", "path" : "/list/ListGuide" },
              { "name" : "공통, etc", "path" : "/list/ListCommon" },
              { "name" : "메인", "path" : "/list/ListMain" },
              { "name" : "유심구매", "path" : "/list/ListUsim" },
              { "name" : "요금제", "path" : "/list/ListRatePlan" },
              { "name" : "혜택", "path" : "/list/ListBeneFit" },
              { "name" : "고객지원", "path" : "/list/ListCS" },
              { "name" : "마이페이지", "path" : "/list/ListMypage" },
              { "name" : "로그인", "path" : "/list/ListLogin" },
              { "name" : "푸터", "path" : "/list/ListFooter" },
            ],
      pageOn: 0,
      pageInfo: {"total": 0, "end": 0, "per": 0 },
    }
  },
  methods: {
    changeGuidePage(num){
      this.pageOn = num;
    },
    getPageInfo(){
      let tr = document.querySelectorAll("tbody tr").length;
      let hid = document.querySelectorAll("tbody tr.hid").length;

      let end = document.querySelectorAll("tbody tr.end").length;
      let mod = document.querySelectorAll("tbody tr.mod").length;
      
      let pageTotal = tr - hid;
      let pageEnd = end + mod;
      let pagePer = (pageEnd == 0 ) ? 0 : ( pageTotal * 10 / pageEnd ).toFixed(1);

      console.log(pagePer);

      this.pageInfo.total = pageTotal;
      this.pageInfo.end = pageEnd;
      this.pageInfo.per = pagePer;
    }
  },
  mounted(){
    this.getPageInfo();
  },
  updated(){
    this.getPageInfo();
  },
  components:{
    GuideHeader,
  },
}
</script>

<style>
@import url(../views/guide/guide.css);
</style>