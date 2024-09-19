<template>
  <div class="video_wrap"  @touchstart="showControls" >
        <!-- video controls custom -->
        <div id="videoContainer" :class="{fixed : isFixed}">
          <video preload="auto" playsinline ref="video" @loadedmetadata="setMaxProgress" @timeupdate="updateProgress" :muted="isMuted">
            <source src="/src/assets/images/hw.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div id="video-controls" v-show="videoControlsVisible"  :class="{ 'video-controls-animated': animatedClassVisible }" >
            <button class="btn_play" @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button> <!--  v-if="isPlayButtonVisible" 삭제 -->
            <!-- <button class="btn_stop" @click="stopVideo">Stop</button>
            <button @click="toggleMute">{{ isMuted ? 'Unmute' : 'Mute' }}</button>
            <button @click="alterVolume('+')">Volume +</button>
            <button @click="alterVolume('-')">Volume -</button> -->
            <!-- <input type="range" ref="progress" @click="seek" min="0" :max="duration" v-model="currentTime"> -->
            <!-- <button v-if="fullscreenEnabled" @click="toggleFullscreen">Fullscreen</button> -->
            <div>
              <!-- <button @click="toggleClass">full</button> -->
              <button @click="toggleFullscreen">{{ isFullscreen ? '축소' : '확대' }}</button>
            </div>
            <div class="progress-bar" @click="seek">
              <div class="progress-filled" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>
        </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 회전하는 코드
// const rotation = ref(0);
// const rotateVideo = () => {
//   rotation.value = (rotation.value + 90) % 360

// }

const isFixed = ref(false);
const toggleClass = () => {
  isFixed.value = !isFixed.value;
}

const isPlaying = ref(false);
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const videoControlsVisible = ref(true);
// const fullscreenEnabled = ref(false);
// const isPlayButtonVisible = ref(true);


const video = ref(null);
// const progress = ref(null);
const progressPercentage = ref(0); // Track progress in percentage

// 0916 추가
const animatedClassVisible = ref(false); // 애니메이션 클래스 토글
let hideControlsTimeout = null; // 1초 후 컨트롤을 숨기기 위한 타이머
let addAnimationTimeout = null;  // 2초 후 애니메이션 추가를 위한 타이머

// const initializeVideo = () => {
//   video.value.controls = false;
// };

// 0919
// 전체 화면 여부를 추적하는 상태 변수
const isFullscreen = ref(false);

// 전체 화면 토글 함수 (확대/축소 기능)
const toggleFullscreen = async () => {
  const elem = document.documentElement; // 전체 화면으로 전환할 요소

  try {
    if (!isFullscreen.value) {
      // 전체 화면으로 진입 및 가로 모드로 전환
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // 파이어폭스
        await elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // 사파리
        await elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/엣지
        await elem.msRequestFullscreen();
      }

      // 가로 모드로 전환
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock('landscape');
      }

      // 전체 화면 상태 업데이트
      isFullscreen.value = true;

    } else {
      // 전체 화면 해제 및 세로 모드로 전환
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // 파이어폭스
        await document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // 사파리
        await document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/엣지
        await document.msExitFullscreen();
      }

      // 세로 모드로 전환
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock('portrait');
      }

      // 전체 화면 상태 업데이트
      isFullscreen.value = false;
    }
  } catch (err) {
    console.log("화면 전환 실패:", err);
  }
};

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
  
}

// function stopVideo() {
//   video.value.pause();
//   video.value.currentTime = 0;
//   currentTime.value = 0;
//   isPlaying.value = false;
//   // isPlayButtonVisible.value = true; // 비디오 정지 시 다시 버튼 보이기
// }

// function toggleMute() {
//   video.value.muted = !video.value.muted;
//   isMuted.value = video.value.muted;
// }

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

function showControls() {
// 컨트롤이 보이지 않는 경우에만 보이게 설정
if (!videoControlsVisible.value) {
    videoControlsVisible.value = true;
  // } else {
  //   videoControlsVisible.value = false;

  }
  // 애니메이션 클래스 타이머 초기화 및 재설정
  if (addAnimationTimeout) {
    clearTimeout(addAnimationTimeout);
  }
  if (hideControlsTimeout) {
    clearTimeout(hideControlsTimeout);
  }

  // 2초 후 애니메이션 클래스 추가
  addAnimationTimeout = setTimeout(() => {
    animatedClassVisible.value = true;

    // 1초 후 컨트롤 숨김
    hideControlsTimeout = setTimeout(() => {
      videoControlsVisible.value = false;
      animatedClassVisible.value = false; // 애니메이션 클래스도 초기화
    }, 1000);
  }, 3000);
  
}


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
/* 애니메이션 추가 */
.video-controls-animated {
  animation: fadein 2s;
}
@keyframes fadein {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}

.video_wrap {
  position: relative;
  background-color: black;
}
.btn_play {
  position: absolute;
  top: 50px;
  margin: auto;
  /* transition:  opacity 400ms ease-in-out; */
  transition: 0.4s all ease-in-out;
  
}
#videoContainer {
  position: relative;
  background-color: black;
}
#videoContainer video {
    width: 100%;
}
#video-controls {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, .3);
}

button {
  margin: 0 5px;
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}
#videoContainer.fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  /* background-color: black; */
  /* background: rgba(0, 0, 0, 0.5); */
  z-index: 1000;
}

#videoContainer.fixed #video-controls {
  transform: rotate(90deg);
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  /* right: 0; */
  width: 100vh;
  height: 100vh;
}
#videoContainer.fixed video {
  transform: rotate(90deg);
  width: 100vh;
  transition: all 0.1s ease-in-out;

}
#videoContainer.fixed .btn_play {
  top: initial;
  bottom: 200px;
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
