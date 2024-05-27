/*
 author : Taddy
 file : lottie.ts
*/
import { defineNuxtPlugin } from '#app'
import Vue3Lottie from 'vue3-lottie'

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(Vue3Lottie)
})