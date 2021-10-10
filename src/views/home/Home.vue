<template>
<div>
  <page-head>
    <div slot="left" class="top"><i class="bi bi-justify" style="padding: 20px"></i></div>
    <div slot="center"  class="as">
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Text input with dropdown button">
      </div>
    </div>
    <div slot="right" class="top"><i class="bi bi-justify" ></i></div>
  </page-head>
</div>
</template>

<script>
import PageHead from 'components/common/head/PageHead'
export default {
  name: "Home",
  components:{
    PageHead
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/base"
</style>

<style>
.top{
  margin-top: 15px;
}
.as{
  margin-top: 8px;
}
</style>