<template>
  <router-view />
</template>

<script>
import '@/styles/variables.scss'

export default {
  name: 'App',
  mounted(){
    this.$front.device();
  }
}
</script>