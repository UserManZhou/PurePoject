<template>
  <div id="tab-bar" class="has-background-link-light">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FatherFoot"
}
</script>

<style scoped>
#tab-bar{
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>

<style lang="sass">
@import "src/assets/css/base"
</style>