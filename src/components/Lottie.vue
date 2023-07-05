<template>
  <div v-for="(a, i) in data" :key="i">
    <Vue3Lottie v-if="a.show" :animationData="a.data" loop autoplay />
  </div>
</template>

<script>
import LottieLoading from "@/assets/images/animation/loading.json";
import LottieComplete from "@/assets/images/animation/ani_complete.json";
import LottieJoinComplete from "@/assets/images/animation/ani_join_complete.json";
import LottieMainChar from "@/assets/images/animation/ani_main_char.json";
import LottiePlan01 from "@/assets/images/animation/ani_plan01.json";
import LottiePlan02 from "@/assets/images/animation/ani_plan02.json";
import LottiePlan03 from "@/assets/images/animation/ani_plan03.json";
import LottiePlan04 from "@/assets/images/animation/ani_plan04.json";

export default {
  name: "CompLottie",
  data(){
    return {
      // },
      data: [
        {"name": "loading",       "show": false, "data": LottieLoading },
        {"name": "complete",      "show": false, "data": LottieComplete },
        {"name": "joinComplate",  "show": false, "data": LottieJoinComplete },
        {"name": "mainChar",      "show": false, "data": LottieMainChar },
        {"name": "plan01",        "show": false, "data": LottiePlan01 },
        {"name": "plan02",        "show": false, "data": LottiePlan02 },
        {"name": "plan03",        "show": false, "data": LottiePlan03 },
        {"name": "plan04",        "show": false, "data": LottiePlan04 },
      ],
    }
  },
  mounted(){
    const name = this.name;
    this.data.forEach( a =>{ if( name == a.name ) a.show = true })
  },
  props: {
    name: String,
  },
};
</script>