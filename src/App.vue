<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(){
      setTimeout(()=>{ this.$front.init() }, 0);
    }
  }
}
</script>