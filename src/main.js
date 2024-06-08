/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
// import Hammer from 'hammerjs'

// Plugins
import { registerPlugins } from '@/plugins'
import front from "./assets/js/front"
import Vue3Lottie from 'vue3-lottie'

import "./assets/css/style.css";

//hammer.js를 전역으로 등록
// app.config.globalProperties.$hammer = Hammer;

const app = createApp(App)
registerPlugins(app)

app
.use(Vue3Lottie)
.use(front)
.mount('#app')
