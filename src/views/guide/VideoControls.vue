<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      <!-- <button type="button" @click="click()">클릭</button> -->
      <section  class="section">
        <!-- https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player -->
        <!-- <figure id="videoContainer">
          <video id="video" controls src="/src/assets/images/hw.mp4" style="width:500px;"></video>
        </figure>
        <ul id="video-controls" class="controls">
          <li><button id="playpause" type="button">Play/Pause</button></li>
          <li><button id="stop" type="button">Stop</button></li>
          <li class="progress">
            <progress id="progress" value="0" min="0"></progress>
          </li>
          <li><button id="mute" type="button">Mute/Unmute</button></li>
          <li><button id="volinc" type="button">Vol+</button></li>
          <li><button id="voldec" type="button">Vol-</button></li>
          <li><button id="fs" type="button">Fullscreen</button></li>
        </ul> -->
      </section> 

      <div class="section">
<!-- https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics -->
<!-- <video id="video" muted controls src="/src/assets/images/hw.mp4" style="width:500px;"></video> -->

<!-- video custom -->
<!-- <div id="video-controls" class="controls" data-state="hidden">
  <button id="playpause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="volinc" type="button" data-state="volup">Vol+</button>
  <button id="voldec" type="button" data-state="voldown">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
</div> -->

  <div id="videoContainer">
    <video ref="video" @loadedmetadata="setMaxProgress" @timeupdate="updateProgress" :muted="isMuted" controls="false"  src="/src/assets/images/hw.mp4" />
      <!-- <source src="/src/assets/images/hw.mp4" type="video/mp4"> -->
    <!-- </video> -->
    <div id="video-controls" v-show="videoControlsVisible">
      <button @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
      <button @click="stopVideo">Stop</button>
      <button @click="toggleMute">{{ isMuted ? 'Unmute' : 'Mute' }}</button>
      <button @click="alterVolume('+')">Volume +</button>
      <button @click="alterVolume('-')">Volume -</button>
      <input type="range" ref="progress" @click="seek" min="0" :max="duration" v-model="currentTime">
      <button v-if="fullscreenEnabled" @click="toggleFullscreen">Fullscreen</button>
    </div>
  </div>



      </div>



      <!-- // section -->



    </div> <!-- // content -->
  </div> <!-- // container -->
</template>


<script setup>

import { ref, onMounted } from 'vue';

const isPlaying = ref(false);
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const videoControlsVisible = ref(true);
const fullscreenEnabled = ref(false);

const video = ref(null);
const progress = ref(null);

onMounted(() => {
  fullscreenEnabled.value = document.fullscreenEnabled;
  video.value.controls = false;
});

function togglePlayPause() {
  if (video.value.paused || video.value.ended) {
    video.value.play();
    isPlaying.value = true;
  } else {
    video.value.pause();
    isPlaying.value = false;
  }
}

function stopVideo() {
  video.value.pause();
  video.value.currentTime = 0;
  currentTime.value = 0;
  isPlaying.value = false;
}

function toggleMute() {
  video.value.muted = !video.value.muted;
  isMuted.value = video.value.muted;
}

function alterVolume(dir) {
  const currentVolume = Math.floor(video.value.volume * 10) / 10;
  if (dir === '+' && currentVolume < 1) {
    video.value.volume += 0.1;
  } else if (dir === '-' && currentVolume > 0) {
    video.value.volume -= 0.1;
  }
}

function setMaxProgress() {
  duration.value = video.value.duration;
}

function updateProgress() {
  currentTime.value = video.value.currentTime;
}

function seek(event) {
  const rect = progress.value.getBoundingClientRect();
  const pos = (event.pageX - rect.left) / progress.value.offsetWidth;
  video.value.currentTime = pos * video.value.duration;
  currentTime.value = video.value.currentTime;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    video.value.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// // const videoContainer = document.getElementById("videoContainer");
// const video = document.getElementById("video");
// const videoControls = document.getElementById("video-controls");
// // Hide the default controls
// video.controls = false;

// // Display the user defined video controls
// videoControls.style.display = "block";
// const playpause = document.getElementById("playpause");
// const stop = document.getElementById("stop");
// const mute = document.getElementById("mute");
// const volinc = document.getElementById("volinc");
// const voldec = document.getElementById("voldec");
// const progress = document.getElementById("progress");
// const fullscreen = document.getElementById("fs");
// playpause.addEventListener("click", () => {
//   if (video.paused || video.ended) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });
// stop.addEventListener("click", () => {
//   video.pause();
//   video.currentTime = 0;
//   progress.value = 0;
// });
// mute.addEventListener("click", () => {
//   video.muted = !video.muted;
// });
// volinc.addEventListener("click", () => {
//   alterVolume("+");
// });
// voldec.addEventListener("click", () => {
//   alterVolume("-");
// });
// function alterVolume(dir) {
//   const currentVolume = Math.floor(video.volume * 10) / 10;
//   if (dir === "+" && currentVolume < 1) {
//     video.volume += 0.1;
//   } else if (dir === "-" && currentVolume > 0) {
//     video.volume -= 0.1;
//   }
// }
// video.addEventListener("loadedmetadata", () => {
//   progress.setAttribute("max", video.duration);
// });
// video.addEventListener("timeupdate", () => {
//   progress.value = video.currentTime;
// });
// video.addEventListener("timeupdate", () => {
//   if (!progress.getAttribute("max"))
//     progress.setAttribute("max", video.duration);
//   progress.value = video.currentTime;
// });
// progress.addEventListener("click", (e) => {
//   const rect = progress.getBoundingClientRect();
//   const pos = (e.pageX - rect.left) / progress.offsetWidth;
//   video.currentTime = pos * video.duration;
// });
// if (!document?.fullscreenEnabled) {
//   fullscreen.style.display = "none";
// }




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


export default {
  name: "videoControls",
  // emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '' },
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
<style scoped>



/*  js */
/* figure {
  max-width: 64rem;
  width: 100%;
  max-height: 30.875rem;
  height: 100%;
  margin: 1.25rem auto;
  padding: 1.051%;
  background-color: #666;
}

.controls progress {
  display: block;
  width: 100%;
  height: 81%;
  margin-top: 0.125rem;
  border: none;
  color: #0095dd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%;  of figure's height
  position: relative;
}

.controls[data-state="hidden"] {
  display: none;
}

.controls[data-state="visible"] {
  display: block;
}
.controls > * {
  float: left;
  width: 3.90625%;
  height: 100%;
  margin-left: 0.1953125%;
  display: block;
}

.controls > *:first-child {
  margin-left: 0;
}
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
.controls progress {
  display: block;
  width: 100%;
  height: 81%;
  margin-top: 0.125rem;
  border: none;
  color: #0095dd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.controls progress[data-state="fake"] {
  background: #e6e6e6;
  height: 65%;
}
.controls progress span {
  width: 0%;
  height: 100%;
  display: inline-block;
  background-color: #2a84cd;
}
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
} */

</style>