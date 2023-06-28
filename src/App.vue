<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$front.device();
  }
}
</script>