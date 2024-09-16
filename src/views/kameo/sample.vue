<template>
    <div class="video_wrap" @touchstart="showControls">
      <div id="videoContainer">
        <video ref="video" @loadedmetadata="setMaxProgress" @timeupdate="updateProgress" :muted="isMuted">
          <source src="/src/assets/images/hw.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div id="video-controls" v-show="videoControlsVisible" class="video-controls-animated">
          <button class="btn_play" @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
          <button class="btn_stop" @click="stopVideo">Stop</button>
          <button @click="toggleMute">{{ isMuted ? 'Unmute' : 'Mute' }}</button>
          <button @click="enterFullScreen">Full Screen Rotate</button>
  
          <!-- Custom Progress Bar -->
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
  const videoControlsVisible = ref(false); // 처음에 controls가 숨겨진 상태로 시작
  const video = ref(null);
  const progressPercentage = ref(0); // Track progress in percentage
  
  onMounted(() => {
    if (video.value) {
      video.value.controls = false; // Disabling default controls
    }
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
    progressPercentage.value = 0;
  }
  
  function toggleMute() {
    video.value.muted = !video.value.muted;
    isMuted.value = video.value.muted;
  }
  
  function setMaxProgress() {
    duration.value = video.value.duration;
  }
  
  function updateProgress() {
    currentTime.value = video.value.currentTime;
    progressPercentage.value = (currentTime.value / duration.value) * 100; // Update progress in percentage
  }
  
  function seek(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const pos = (event.clientX - rect.left) / rect.width;
    video.value.currentTime = pos * video.value.duration;
    currentTime.value = video.value.currentTime;
  }
  
  function showControls() {
    // controls가 보이지 않는 상태일 때만 변경
    if (!videoControlsVisible.value) {
      videoControlsVisible.value = true;
    }
  }
  
  function enterFullScreen() {
    if (video.value.requestFullscreen) {
      video.value.requestFullscreen();
    } else if (video.value.webkitRequestFullscreen) { // iOS
      video.value.webkitRequestFullscreen();
    } else if (video.value.msRequestFullscreen) { // IE/Edge
      video.value.msRequestFullscreen();
    }
  
    // 90도 회전을 위한 스타일 추가
    video.value.style.transform = 'rotate(90deg)';
    video.value.style.width = '100vh'; // 회전 후 화면을 꽉 채우기 위해 가로/세로 맞춤
    video.value.style.height = '100vw';
  }
  
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      exitFullScreen();
    }
  });
  
  document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
      exitFullScreen();
    }
  });
  
  document.addEventListener('msfullscreenchange', () => {
    if (!document.msFullscreenElement) {
      exitFullScreen();
    }
  });
  
  function exitFullScreen() {
    video.value.style.transform = 'none';
    video.value.style.width = '100%';
    video.value.style.height = 'auto';
  }
  </script>
  
  <style scoped>
  .video_wrap {
    position: relative;
    background-color: red;
  }
  .btn_play {
    position: absolute;
    top: -100px;
    margin: auto;
  }
  #videoContainer {
    position: relative;
  }
  
  #video-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  
  button:hover {
    opacity: 0.7;
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
  
  /* 애니메이션 추가 */
  .video-controls-animated {
    transition: opacity 0.3s ease-in-out;
  }
  
  [v-show="videoControlsVisible"] {
    opacity: 1;
  }
  
  [v-show="!videoControlsVisible"] {
    opacity: 0;
  }
  </style>
  