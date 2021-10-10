<template>
    <father-foot>
      <children-foot link="/person">
        <div slot="children-icon"><i class="bi bi-person"></i></div>
        <div slot="children-icon-change"><i class="bi bi-person-fill"></i></div>
        <div slot="children-text" class="text-capitalize">我的</div>
        <div slot="children-text-change" class="text-capitalize text-primary">我的</div>
      </children-foot>
      <children-foot link="/novel">
        <div slot="children-icon"><i class="bi bi-book"></i></div>
        <div slot="children-icon-change"><i class="bi bi-book-fill"></i></div>
        <div slot="children-text" class="text-capitalize">小说</div>
        <div slot="children-text-change" class="text-capitalize text-primary">小说</div>
      </children-foot>
      <children-foot link="/note">
        <div slot="children-icon"><i class="bi bi-pencil-square"></i></div>
        <div slot="children-icon-change"><i class="bi bi-pencil-fill"></i></div>
        <div slot="children-text" class="text-capitalize">我的笔记</div>
        <div slot="children-text-change" class="text-capitalize text-primary">我的笔记</div>
      </children-foot>
      <children-foot link="/home">
        <div slot="children-icon"><i class="bi bi-house-door"></i></div>
        <div slot="children-icon-change"><i class="bi bi-house-door-fill"></i></div>
        <div slot="children-text" class="text-capitalize">首页</div>
        <div slot="children-text-change" class="text-capitalize text-primary">首页</div>
      </children-foot>
    </father-foot>
</template>

<script>
import ChildrenFoot from "../../common/foot/chlidrent/ChildrenFoot";
import FatherFoot from "../../common/foot/chlidrent/FatherFoot";
export default {
  name: "PageFoot",
  components:{
    ChildrenFoot,
    FatherFoot
  },
}
</script>

<style scoped>

</style>