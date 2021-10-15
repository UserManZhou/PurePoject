<template>
  <div>
    <novel-foot :link="link">
      <div class="novleRead">
        <button class="button is-primary is-inverted has-text-black" @click="btnClick">古典仙侠</button>
        <button class="button is-primary is-inverted has-text-black" @click="btnClick2">现代修真</button>
        <button class="button is-primary is-inverted has-text-black" @click="btnClick3">新派武侠</button>
        <div class="novelRight">
          <button class="button is-primary is-inverted has-text-black" @click="btnClick4">传统武侠</button>
          <button class="button is-primary is-inverted has-text-black" @click="btnClick5">奇幻修真</button>
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
    btnClick(){
      this.link = "/novelBookFoot"
    },
    btnClick2(){
      this.link = "/novelRead_Foot"
    },
    btnClick3(){
      this.link = "/novelRead__Foot"
    },
    btnClick4(){
      this.link = '/novelRead___Foot'
    },
    btnClick5(){
      this.link = "/novelRead____Foot"
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/novle/novel"
</style>