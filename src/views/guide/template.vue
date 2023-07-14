<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">page info</div>
      
      <div class="section">
        <h3 class="tit02">sub title in section</h3>

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideTemplate',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: 'Guide' },
      // popup이 있는 경우 set
      // popupItem: ['termsVerPop'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    // popup이 있는 경우 set
    // this.$emit('popupItem', this.popupItem);
  }
}
</script>
