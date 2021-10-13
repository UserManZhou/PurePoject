<template>
  <div class="novleRead">
   <novel-foot :link="link">
     <button class="button is-primary is-inverted has-text-black" @click="btnClick">变身情缘</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick2">东方玄幻</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick3">转世重生</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick4">上古神话</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick5">魔法校园</button>
   </novel-foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NovelFoot from "components/common/body/novel/NovelFoot";
export default {
  name: "novelRead",
  components:{
    NovelFoot
  },
  data(){
    return {
      link : ''
    }
  },
  methods:{
    btnClick(){
      this.link = "/novelReadFoot"
    },
    btnClick2(){
      this.link = "sss2"
    },
    btnClick3(){
      this.link = "sss3"
    },
    btnClick4(){
      this.link = 'sss4'
    },
    btnClick5(){
      this.link = "sss5"
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/novle/novel.scss"
</style>