<template>
  <div>
    <ul class="nav justify-content-center" >
   <novel-body link="/novelRead">
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" >奇幻玄幻</a>
       </li>
   </novel-body>
    <novel-body link="/novelBooks">
      <li class="nav-item">
        <a class="nav-link">武侠仙侠</a>
      </li>
    </novel-body>
      <novel-body link="/cultureNovel">
        <li class="nav-item">
          <a class="nav-link">都市娱乐</a>
        </li>
      </novel-body>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import NovelBody from "components/common/body/novel/NovelBody";

export default {
  name: "TotalNovel",
  components:{
    NovelBody
  }
}
</script>

<style scoped>

</style>