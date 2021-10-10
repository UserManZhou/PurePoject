<template>
  <div>
<!-- <page-head>
   <div slot="left" class="top"><i class="bi bi-justify" style="padding: 20px"></i></div>
   <div slot="center" class="top as">
     <div class="input-group mb-3">
     <input type="text" class="form-control" aria-label="Text input with dropdown button">
     </div>
   </div>
   <div slot="right" class="top"><i class="bi bi-justify" ></i></div>
 </page-head>-->
 <page-head>
   <div slot="left" class="sidebar">
     Note
   </div>
 </page-head>
    <p class="panel-tabs">
    <sidebar link="/sidebar">
        <a>最近笔记</a>
    </sidebar>
    <sidebar link="/newsidebar">
        <a>创建笔记</a>
    </sidebar>
    <sidebar link="/totalNote">
        <a>全部笔记</a>
    </sidebar>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHead from "components/common/head/PageHead";
import Sidebar from "components/common/body/sidebar/Sidebar";
export default {
  name: "Note",
  components:{
    Sidebar,
    PageHead
  },

}
</script>

<style scoped lang="sass">
@import "src/assets/css/base"
</style>

<style>
.sidebar{
  text-align: center;
  margin-top: 15px;

}
.sidebar button{
  margin-right: 15px
}
</style>