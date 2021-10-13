<template>
  <div>
    <div @click="novelClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NovelBody",
  props:{
    link : String
  },
  methods:{
    novelClick(){
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>

</style>