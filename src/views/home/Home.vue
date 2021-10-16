<template>
<div>
  <novel-foot :link="link">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <a class="navbar-brand" @click="novelClick('/home')">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" @click="novelClick('/novel')">Novel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="novelClick('/note')">Note</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="novelClick('/person')">Mine</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </novel-foot>
<!--  <figure class="image is-16by9">
    <iframe class="has-ratio" width="640" height="360" src="https://www.bilibili.com/video/BV1QK4y1t7fJ?spm_id_from=333.999.0.0" frameborder="0" allowfullscreen></iframe>
  </figure>-->
<!--  <video autoplay="autoplay" height="120px">
    <source src="https://www.bilibili.com/video/BV1QK4y1t7fJ?spm_id_from=333.999.0.0" type="video/mp4" />
  </video>-->
<!--  <video autoplay="autoplay" src="https://www.bilibili.com/video/BV1QK4y1t7fJ?spm_id_from=333.999.0.0"></video>-->
</div>
</template>

<script>
/*import PageHead from 'components/common/head/PageHead'*/
import NovelFoot from "components/common/body/novel/NovelFoot";


export default {
  name: "Home",
  components:{
    NovelFoot
  },
  data(){
    return{
      link:''
    }
  },
  methods:{
    novelClick(str){
      this.link = str
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/bootstrap"
</style>

<style>
/*.top{
  margin-top: 15px;
}
.as{
  margin-top: 8px;
}*/
</style>