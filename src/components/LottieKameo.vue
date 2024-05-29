<template>
    <Vue3Lottie :animationData="LotteComplete" :width='200' :height='200' />
</template>

<script>
import { Vue3Lottie  } from "vue3-lottie";

import LotteComplete from "@/assets/images/animation/loading.json";



export default {
  name: "CompLottie",
  data(){
    return {
      LotteComplete,
      // data: [
      //   {"name": "loading",       "show": false, "data": LottieLoading },
      //   {"name": "complete",      "show": false, "data": LottieComplete },
      // ],
    }
  },
  components:[
    Vue3Lottie,
  ],
  // mounted(){
  //   const name = this.name;
  //   this.data.forEach( a =>{ if( name == a.name ) a.show = true })
  // },
  // props: {
  //   name: String,
  // },
};
</script>