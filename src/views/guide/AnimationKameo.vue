<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      <div class="section">
        <video autoplay loop muted playsinline src="/src/assets/images/hw.mp4" style="width:300px;"></video>
        <div class="tit_wrap">
          <h3 class="tit03">swiper</h3>
        </div>
        

        <div>siwper할 때, 재생하는 스크립트가 필요함</div>
        <div class="">
          <swiper
            :spaceBetween="30"
            class="mySwiper">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>
            <video autoplay loop muted playsinline src="/src/assets/images/hw.mp4"></video>
          </swiper-slide>
          <!-- <swiper-slide>
            <video autoplay loop muted playsinline src="/src/assets/images/hw.mp4"></video>
          </swiper-slide> -->
          <!-- <swiper-slide>
            <video autoplay playsinline preload="none">
              <source src="/src/assets/images/hw.mp4" type="video/mp4">
            </video>
          </swiper-slide> 
          <swiper-slide>
            <video controls>
              <source src="https://her2237.github.io/img1/pf/space/Earth - 733.mp4" type="video/mp4">
            </video>
          </swiper-slide>-->
          <!-- <swiper-slide> -->
            <!-- <video controls>
              <source src="https://her2237.github.io/img1/pf/space/Space%20Ship%20-%203.mp4" type="video/mp4">
            </video> -->
            <!-- <video autoplay muted src="https://her2237.github.io/img1/pf/space/Space%20Ship%20-%203.mp4"></video> -->
          <!-- </swiper-slide> -->
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>
            <video autoplay loop muted playsinline src="/src/assets/images/hw.mp4"></video>
          </swiper-slide>
        </swiper>
        </div>
      </div>

      <div class="page_info">Animation</div>


      <div class="section">
        <h3 class="tit02">complete</h3>
        <LottieKameo />
        <LottieCameo name="loading" />
      </div><!-- // section -->



    </div> <!-- // content -->
  </div> <!-- // container -->
</template>


<script setup>
// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper-container', {
//         on: {
//             slideChange: function () {
//                 let videos = document.querySelectorAll('video');
//                 videos.forEach(video => {
//                     video.pause();
//                     video.currentTime = 0;
//                 });

//                 let activeSlide = swiper.slides[swiper.activeIndex];
//                 let video = activeSlide.querySelector('video');
//                 if (video) {
//                     video.play();
//                 }
//             },
//             init: function () {
//                 let activeSlide = swiper.slides[swiper.activeIndex];
//                 let video = activeSlide.querySelector('video');
//                 if (video) {
//                     video.play();
//                 }
//             }
//         }
//     });
// });
</script>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import LottieKameo from "@/components/LottieKameo.vue";
import LottieCameo from "@/components/LottieCameo.vue";

// import 'swiper/css';

// import './style.css';

export default {
  name: "GuideAnimation",
  // emits: ['popupItem', 'setLayout'],
  data(){
    return {
      // layout: { header: 'sub2', footer: '', title: '' },
    }
  },
  mounted(){
    // this.$emit('setLayout', this.layout);
  },
  components: {
    LottieKameo,
    LottieCameo,
    Swiper,
    SwiperSlide,

  }
};
</script>
<style scoped>
.swiper-slide {height:200px; background: gray;}
.swiper-slide video {width:100%; height:100%; object-fit: cover;}
</style>