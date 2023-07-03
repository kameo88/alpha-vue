<template>
  <p>home</p>
</template>

<script>
export default {
  name:'HomePage',
  mounted(){
    this.$router.push("/list/ListGuide");
  }
}
</script>

<style>
</style>