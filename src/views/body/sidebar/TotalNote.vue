<template>
  <div>
    <div class="box">
      <article class="media" v-for="(item,index) in note" :key="index">
        <div class="media-content" >
          <div class="content">
            <p>
             <small>{{item.title}}</small>
              <br>
              {{item.summary}}
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
</template>

<script>
import request from "network/request";
export default {
  name: "TotalNote",
 /* props:{
    note: {
      type: Array
    }
  },*/
  data(){
    return {
      note: request({url: 'vue-note/findNote'}, success => {
        console.log(success.data[0])
        this.note = success.data
      })
    }
    }
}
</script>

<style scoped>

</style>