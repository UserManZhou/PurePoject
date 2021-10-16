<template>
  <div class="novleRead">
   <novel-foot :link="link">
     <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelReadFoot')">变身情缘</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelRead_Foot')">东方玄幻</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelRead__Foot')">转世重生</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelRead___Foot')">上古神话</button>
     <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelRead____Foot')">魔法校园</button>
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
    btnClick(str){
      this.link = str
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/novle/novel.scss"
</style>