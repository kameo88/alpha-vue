<template>
  <div class="container">
    <div class="content" id="content">
      <div class="section">

        <div>swiper test</div>
        <div class="swiperWrap">
          <swiper 
            :pagination="true"
            :modules="modules" 
            :spaceBetween="30"
            @slideChange="onSlideChange"
            class="mySwiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Define Swiper modules
const modules = [Pagination];

// Create a ref for Swiper instance
const swiperRef = ref(null);

// Event handler for slide change
const onSlideChange = () => {
  
  const swiperInstance = swiperRef.value.swiper;

  if (swiperInstance.realIndex === 0) {
    swiperInstance.allowSlidePrev = false;
  } else {
    swiperInstance.allowSlidePrev = true;
  }
};

// Emit layout change when component is mounted
onMounted(() => {
  const layout = { header: 'sub', footer: 'none' };
  // Assuming you have a method to emit the layout change
  // Replace `emitLayoutChange` with your actual method to emit
  emitLayoutChange(layout);
});
</script>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/css';

// import 'swiper/css/pagination';

// import { Pagination} from 'swiper/modules';

// export default {
// emits: ['setLayout'],
// data() {
//     return {
//       layout: { header: 'sub', footer: 'none' },
//       modules: [Pagination],
//     }
// },
// mounted(){
//     this.$emit('setLayout', this.layout);
// },
// methods : {
//   onSlideChange: function() {
//     if (this.activeIndex === 0) {
//             this.allowSlidePrev = false;
//             alert('kameo');
//         } else {
//             this.allowSlidePrev = true;
//         }
//       },

//       // if (this.realIndex == 0) {
// 			// 	this.allowSlidePrev = false;
// 			// } else {
// 			// 	this.allowSlidePrev = true;
// 			// }

// },
// components: {
//     Swiper,
//     SwiperSlide,
//   }
// };
</script>


<style scoped>
/* .swiperTest */
.swiper-slide {width: 500px; height: 200px; margin:auto; background-color: antiquewhite;}
</style>