<template>
  <div @click="sidebarClick">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
      link:String
    },
  methods:{
    sidebarClick(){
      console.log(this.link);
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>

</style>