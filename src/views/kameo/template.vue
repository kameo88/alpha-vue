<template>
  <div class="container">
    <div class="content" id="content">
        <!-- loading bar -->
        <div class="section">
          <v-btn @click="startLoading" color="primary">Start Loading</v-btn>
          <v-progress-circular
          v-if="loading"
          :size="50"
          :width="5"
          color="amber"
          indeterminate
          ></v-progress-circular>
          <div v-if="!loading && fileSize !== '0kb'" class="text">{{ fileSize }}</div>
          <!-- <div class="text">{{ fileSize }}</div> -->
          <div v-if="!loading && fileSize === '0kb'" class="text">{{ fileSize }}</div>
        </div>
        <div class="section">
          <CntsImgVideo />
        </div>



    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

import CntsImgVideo from '../../components/CntsImgVideo.vue';

const loading = ref(false);
const fileSize = ref('200kb');

// vuetify loading
function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false;
    fileSize.value = '0kb';
  }, 3000);

}

</script>


<script>
export default {
  name: "GuideAnimation",
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', title: '' },
    }
  },
  mounted(){
    // this.$emit('setLayout', this.layout);
  },
  methods: {
    // click(){
    //   alert('kameo');
    // },
  },
  components: {
    

  }
};

</script>
