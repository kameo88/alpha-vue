<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(){
      this.$front.init();
    }
  }
}
</script>