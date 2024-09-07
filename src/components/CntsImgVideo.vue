<template>
  <div class="video_wrap" >
        <!-- video controls custom -->
        <div id="videoContainer">
          <video preload="auto" playsinline ref="video" @loadedmetadata="setMaxProgress" @timeupdate="updateProgress" :muted="isMuted">
            <source src="/src/assets/images/hw.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div id="video-controls" v-show="videoControlsVisible" >  <!-- v-show="videoControlsVisible"  삭제 -->
            <button class="btn_play" v-if="isPlayButtonVisible" @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button> <!--  v-if="isPlayButtonVisible" 삭제 -->
            <button class="btn_stop" @click="stopVideo">Stop</button>
            <button @click="toggleMute">{{ isMuted ? 'Unmute' : 'Mute' }}</button>
            <!-- <button @click="alterVolume('+')">Volume +</button>
            <button @click="alterVolume('-')">Volume -</button> -->
            <!-- <input type="range" ref="progress" @click="seek" min="0" :max="duration" v-model="currentTime"> -->
            <!-- <button v-if="fullscreenEnabled" @click="toggleFullscreen">Fullscreen</button> -->
            <div class="progress-bar" @click="seek">
              <div class="progress-filled" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>
        </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const isPlaying = ref(false);
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const videoControlsVisible = ref(true);
// const fullscreenEnabled = ref(false);
const isPlayButtonVisible = ref(true);


const video = ref(null);
// const progress = ref(null);
const progressPercentage = ref(0); // Track progress in percentage

// const initializeVideo = () => {
//   video.value.controls = false;
// };


onMounted(() => {
  // fullscreenEnabled.value = document.fullscreenEnabled;
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
  setTimeout(() => {
    isPlayButtonVisible.value = false;
  }, 3000);
}

function stopVideo() {
  video.value.pause();
  video.value.currentTime = 0;
  currentTime.value = 0;
  isPlaying.value = false;
  // isPlayButtonVisible.value = true; // 비디오 정지 시 다시 버튼 보이기
}

function toggleMute() {
  video.value.muted = !video.value.muted;
  isMuted.value = video.value.muted;
}

// function alterVolume(dir) {
//   const currentVolume = Math.floor(video.value.volume * 10) / 10;
//   if (dir === '+' && currentVolume < 1) {
//     video.value.volume += 0.1;
//   } else if (dir === '-' && currentVolume > 0) {
//     video.value.volume -= 0.1;
//   }
// }

function setMaxProgress() {
  duration.value = video.value.duration;
}

function updateProgress() {
  currentTime.value = video.value.currentTime;
  progressPercentage.value = (currentTime.value / duration.value) * 100; // Update progress in percentage
}

function seek(event) {
  // const rect = progress.value.getBoundingClientRect();
  // const pos = (event.pageX - rect.left) / progress.value.offsetWidth;
  // video.value.currentTime = pos * video.value.duration;
  // currentTime.value = video.value.currentTime;

  const rect = event.currentTarget.getBoundingClientRect();
  const pos = (event.clientX - rect.left) / rect.width;
  video.value.currentTime = pos * video.value.duration;
  currentTime.value = video.value.currentTime;
}
// 터치하면 버튼을 다시 보이도록 설정
// function showControls() {
//   isPlayButtonVisible.value = true;

//   // 터치한 후에도 일정 시간 후에 버튼을 다시 사라지게 함
//   setTimeout(() => {
//     isPlayButtonVisible.value = false;
//     }, 2000);
// }


// function toggleFullscreen() {
//   if (!document.fullscreenElement) {
//     video.value.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// }
// initializeVideo();

</script>

<style scoped>
.video_wrap {
  position: relative;
}
.btn_play {
  position: absolute;
  top: -100px;
  margin: auto;
  /* transition:  opacity 400ms ease-in-out; */
  transition: 0.4s all ease-in-out;
  
}
#videoContainer {
  position: relative;
}

#video-controls {
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

button {
  margin: 0 5px;
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}


/* Custom progress bar */
.progress-bar {
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.progress-filled {
  position: absolute;
  height: 100%;
  background-color: #2196F3;
  border-radius: 5px;
  transition: width 0.1s ease-in-out;
}
</style>
<!-- style scoped>
.video_wrap {
  position: relative;
  background-color: red;
}
.btn_play {
  position: absolute;
  top: -100px; 
  margin: auto;
  transition:  opacity 400ms ease-in-out;
}
.ani {
  animation: fadein 3s;
}
@keyframes fadein {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}

#videoContainer {
  position: relative;
}

#video-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

button {
  margin: 0 5px;
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

input[type="range"] {
  width: 200px;
  margin: 0 10px;
}

button:hover, input[type="range"]:hover {
  opacity: 0.7;
}
</!-- -->
