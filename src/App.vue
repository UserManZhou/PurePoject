<template>
  <div id="app">
    <router-view></router-view>
    <page-foot></page-foot>
  </div>
</template>
<script>
import PageFoot from "components/content/foot/PageFoot";
export default{
  name: 'App',
  components:{
    PageFoot
  }
}
</script>
<style lang="scss">
</style>
