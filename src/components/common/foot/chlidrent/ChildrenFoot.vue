<template>
<div class="children-head" @click="chilfrenClick" >
  <div v-if="!isActive">
    <slot name="children-icon"></slot>
  </div>
  <div v-else>
    <slot name="children-icon-change"></slot>
  </div>
  <div v-if="!isActive">
    <slot name="children-text"></slot>
  </div>
  <div v-else>
    <slot name="children-text-change"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "ChildrenFoot",
  props:{
    link:String
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) != -1 ? true:false
    }
  },
  data(){
    return{
      isActives: false
    }
  },
  methods:{
    chilfrenClick(){
      console.log(this.link);
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>

 .children-head{
    flex: 1px;
    box-shadow: 0 -3px 1px rgba(100,100,100,0.1);
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .children-head i{
    width: 80px;
    height: 40px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>

<style lang="sass">
@import "src/assets/css/bootstrap.scss"
</style>