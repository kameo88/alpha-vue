<template>
  <div class="container">
    <div class="content" id="content">
      <div class="section">

        <div class="swiperWrap">
          <div>swiper test - script style</div>
          <swiper 
            :pagination="true"
            :modules="modules" 
            :spaceBetween="30"
            @slideChange="onSlideChange"
            class="mySwiper">
            <swiper-slide  v-slot="{ isActive }"><div>Current slide is {{ isActive ? 'active' : 'not active' }}</div></swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
          </swiper>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// const onSlideChange = () => {
//         console.log('slide change');
//     if (this.realIndexChange === 0) {
//             this.allowSlidePrev = false;
//             alert('kameo');
//         } else {
//             this.allowSlidePrev = true;
//         }

// };

</script>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';

import { Pagination} from 'swiper/modules';

export default {
emits: ['setLayout'],
data() {
    return {
      layout: { header: 'sub', footer: 'none' },
      modules: [Pagination],

    }
},
mounted(){
    this.$emit('setLayout', this.layout);
},
methods : {
  onSlideChange: function() {
    alert('kameo');

    if (this.realIndex === 0) {
        console.log('dd');
            this.allowSlidePrev = false;
        } else {
            this.allowSlidePrev = true;
        }
      },

},
components: {
    Swiper,
    SwiperSlide,
  }
};
</script>


<style scoped>
/* .swiperTest */
.swiper-slide {width: 500px; height: 200px; margin:auto; background-color: antiquewhite;}
</style>