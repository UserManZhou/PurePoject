<template>
  <div>
     <novel-foot :link="link">
       <div class="novleRead">
         <button class="button is-primary is-inverted has-text-black" @click="btnClick('/cultureNovelFoot')">现实题材</button>
         <button class="button is-primary is-inverted has-text-black" @click="btnClick('/cultureNovel_Foot')">职场商战</button>
         <button class="button is-primary is-inverted has-text-black" @click="btnClick('/cultureNovel__Foot')">江湖情仇</button>
         <button class="button is-primary is-inverted has-text-black" @click="btnClick('/cultureNovel___Foot')">都市传说</button>
         <button class="button is-primary is-inverted has-text-black" @click="btnClick('/cultureNovel____Foot')">都市异能</button>
         <button class="button is-primary is-inverted has-text-black" @click="btnClick('/cultureNovel_____Foot')">都市生活</button>
         <button class="button is-primary is-inverted has-text-black novelRight" @click="btnClick('/cultureNovel______Foot')">青春生活</button>
       </div>
     </novel-foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NovelFoot from "components/common/body/novel/NovelFoot";

export default {
  name: "CultureNovel",
  components:{
    NovelFoot
  },
  data(){
    return{
      link :''
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