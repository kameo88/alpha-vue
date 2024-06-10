<template>
    <div class="container">
      <div class="content" id="content">
        <div>{{ page01.title }}</div>
        <div>{{ page01.step }} / {{ page01.stepTotal }}</div>
        <template v-for="(radioGroup, index) in radioData" :key="index">
          <v-radio-group v-model="radioGroup.selectedRadio" v-if="index === 0 || radioData[index - 1].selectedRadio !== null">
            <v-radio :label="radioGroup.radioLabelOne" :value="radioGroup.radioLabelOne"></v-radio>
            <v-radio :label="radioGroup.radioLabelTwo" :value="radioGroup.radioLabelTwo"></v-radio>
          </v-radio-group>
        </template>
        <button @click="toggleClass" :class="{ done: isDone }">
          Click me!
        </button>
      </div>

    </div>
</template>

<script setup>
  import { ref } from 'vue';
  
  const page01 = ref({
    title: "kameo test",
    step: 1,
    stepTotal: 5,
  });
  
  const radioData = ref([
    { selectedRadio: null, radioLabelOne: "11", radioLabelTwo: "12" },
    { selectedRadio: null, radioLabelOne: "21", radioLabelTwo: "22" },
    { selectedRadio: null, radioLabelOne: "31", radioLabelTwo: "32" },
    { selectedRadio: null, radioLabelOne: "41", radioLabelTwo: "42" },
  ]);
</script>

<script>
export default {
emits: ['setLayout'],
data() {
    return {
      layout: { header: 'none', footer: 'none' },
      isDone: true,
        
    }
},
methods: {
    toggleClass() {
      this.isDone = !this.isDone;
    },
  },
mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>

<style>.done {
  background-color: blue;
  color: white;
}</style>

