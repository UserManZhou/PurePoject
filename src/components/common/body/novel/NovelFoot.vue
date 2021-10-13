<template>
  <div>
    <div @click="novelFoot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NovelFoot",
  props:{
    link : String
  },
  methods:{
    novelFoot(){
      this.$router.replace(this.link)
      console.log(this.link)
    }
  }
}
</script>

<style scoped>

</style>