<template>
  <div>
    <novel-foot :link="link">
      <div class="novleRead">
        <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelBookFoot')">古典仙侠</button>
        <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelBook_Foot')">现代修真</button>
        <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelBook__Foot')">新派武侠</button>
        <div class="novelRight">
          <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelBook___Foot')">传统武侠</button>
          <button class="button is-primary is-inverted has-text-black" @click="btnClick('/novelBook____Foot')">奇幻修真</button>
        </div>
      </div>
    </novel-foot>
    <router-view></router-view>
  </div>
</template>

<script>
import NovelFoot from "components/common/body/novel/NovelFoot";
export default {
  name: "NovelBooks",
  components:{
    NovelFoot
  },
  data(){
    return{
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
@import "src/assets/css/novle/novel"
</style>