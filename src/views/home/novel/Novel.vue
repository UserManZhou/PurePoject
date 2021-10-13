<template>
  <div>
  <page-head class="has-background-warning">
    <div slot="left" class="sidebar">
       Novel
    </div>
  </page-head>
    <total-novel></total-novel>
  </div>
</template>

<script>
import PageHead from "components/common/head/PageHead";
import TotalNovel from "views/body/novel/TotalNovel";
export default {
  name: "Novel",
  components:{
    PageHead,
    TotalNovel
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/base"
</style>

<style scoped>
.sidebar{
  text-align: center;
  margin-top: 15px;
}
</style>