<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(){
      setTimeout(()=>{ this.$input.init() }, 50) 
    }
  },
  mounted(){
    this.$front.device();
  }
}
</script>