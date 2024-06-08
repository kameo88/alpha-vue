<template>
    <div class="container">
        <div class="content" id="content">
            <div>hammer js
            </div>
            <div ref="hammerDiv" class="touch-area">
                터치 영역
            </div>
                <div ref="myElement"></div>
        </div>
    </div>
</template>



<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import Hammer from 'hammerjs';

const hammerDiv = ref(null);
let hammerInstance = null;

onMounted(() => {
  hammerInstance = new Hammer(hammerDiv.value);

  hammerInstance.on('pan', (event) => {
    console.log('Pan event detected:', event);
  });

  hammerInstance.on('swipe', (event) => {
    console.log('Swipe event detected:', event);
  });

  hammerInstance.on('tap', (event) => {
    console.log('Tap event detected:', event);
  });
});

onBeforeUnmount(() => {
  if (hammerInstance) {
    hammerInstance.destroy();
  }
});
</script>
<script>
export default {
emits: ['setLayout'],
data() {
    return {
      layout: { header: 'sub', footer: 'none' },
        
    }
},
mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
<style scoped>
.touch-area {
  width: 200px;
  height: 200px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}
</style>