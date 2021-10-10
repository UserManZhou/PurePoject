<template>
<div>
  <div class="input-group top">
    <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="note.title">
  </div>
  <div class="input-group top">
    <span class="input-group-text">Context</span>
    <textarea class="form-control" aria-label="With textarea" v-model="note.context"></textarea>
  </div>
  <div class="input-group top">
    <span class="input-group-text">Summary</span>
    <textarea class="form-control" aria-label="With textarea" v-model="note.summary"></textarea>
  </div>
  <div class="top" style="margin-left: 150px">
    <button class="button is-link is-inverted" @click="onsubmit">Submit</button>
    <button class="button is-link is-inverted" @click="onclean">Clean</button>
  </div>

</div>
</template>

<script>
export default {
  name: "NewSIdebarBody",
  data(){
    return{
      note:{
        title:'',
        context:'',
        summary:'',
      }
    }
  },
  methods:{
    onsubmit(){
      console.log("subemit",this.note)
     /* this.$store.commit("saveNote",this.note)*/
      this.$store.dispatch("saveNote",this.note)
    },
    onclean(){
      this.$router.replace('/sidebar')
    }
  }
}
</script>

<style scoped>
.top{
  margin-top: 20px;
}
</style>