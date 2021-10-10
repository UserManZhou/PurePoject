<template>
     <div class="nav-bar has-background-primary">
       <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
     </div>
</template>

<script>
export default {
  name: "PageHead"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 54px;
  text-align: center;
  margin: 0px;
  padding: 0px;
}

.left,.right{
  width: 60px;
}

.center{
  flex: 1;
}
</style>