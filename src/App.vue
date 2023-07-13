<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(){
      console.log('init');
      setTimeout(()=>{ this.$front.init() }, 100);
    }
  }
}
</script>