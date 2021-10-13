<template>
    <div>
      <div v-for="(item,index) in note" :key="index">
        <div class="box" v-if="Math.abs(createtime.getDay() - item.createtime.getDay()) >= 3">
          <article class="media" >
            <div class="media-content"  >
              <div class="content" >
                <p>
                  <strong>{{item.title}}</strong> <small>{{item.context}}</small> <small>{{item.summary}}</small>
                  <br>
                  <span >{{item.createtime.toLocaleDateString()}}</span>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
                  </a>
                  <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
                  </a>
                  <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
import request from "network/request";
/*import moment from 'moment';*/
export default {
  name: "SidebarBody",
  data(){
    return{
      note:request({url:"vue-note/findNote"},success =>{
        for (let i = 0; i < success.data.length; i++) {
           success.data[i].createtime = new Date(success.data[i].createtime)

        }
        this.note = success.data
        console.log(this.note[0].createtime)
        /*Math.abs(createdate.getDay()-date.getDay())*/
      },error => {console.log(error)}),
    /*  createtime:moment(new Date()).format('yyyy-MM-DD')*/
      createtime: new Date()
    }
  },
/*  computed:{
    createTime(){
      return request({url:"vue-note/findNote"},success =>{
        let arrays = new Array();
        for (let successKey in success.data) {
          if (successKey.createtime >= moment(new Date()).format('yyyy-MM-DD')){
              arrays.push(successKey)
          }
        }
        return arrays;
      })
    }
  }*/
}
</script>

<style scoped>

</style>