<template>
    <div class="container">
         <div class="content" id="content">
             <div>{{ page01.title }}</div>
             <div>{{ page01.step }} / {{ page01.stepTotal }} </div>
             <div v-for="(a, i) in radioData" :key="i" >
                 <v-radio-group v-model="a.selectedRadio" >
                     <v-radio :label="a.radioLabelOne" :value="a.radioLabelOne"></v-radio>
                     <v-radio :label="a.radioLabelTwo" :value="a.radioLabelTwo"></v-radio>
                 </v-radio-group>
             </div>
         </div>
     </div>
</template>
 
 
 <script setup>
 import { ref } from 'vue';
 
 const page01 = ref({
     title: "MBTI 선택",
     step: 1,
     stepTotal: 5,
     label: ''
 });
 
 const radioData = ref([
     {selectedRadio: false, radioLabelOne: "11", radioLabelTwo: "12"},
     {selectedRadio: false, radioLabelOne: "21", radioLabelTwo: "22"},
     {selectedRadio: false, radioLabelOne: "31", radioLabelTwo: "32"},
     {selectedRadio: false, radioLabelOne: "41", radioLabelTwo: "42"},
 ]);
 
 </script>
 