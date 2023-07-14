<template>

  <div class="aside_float" v-if="layout.floatMenu != 'none'">
    <div class="inner">
      <a href="javascript:void(0);" class="reco_btn"><span>추천하기</span></a>
      <a href="javascript:void(0);" class="deli_btn"><span>바로배송</span></a>
      <button type="button" class="top_btn" @click="$scroll.top"><span>TOP</span></button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AsideFloat',
  props: {
	layout : Object
  }
}
</script>