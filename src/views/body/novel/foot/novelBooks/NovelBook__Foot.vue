<template>
  <div>
    <div v-for="(item,index) in book" :key="index">
      <div class="box novleReadfoot" >
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img  v-bind:src="require('@/assets/img/book/'+item.img)" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{item.title}}</strong> <br><small>{{item.type}}</small> <small>{{item.state}}</small>
                <br>
                {{item.content}}
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

export default {
  name: "NovelBook__Foot",
  data(){
    return{
      book:request({url:'vue-novel/findNovel/newMartial'},success => this.book = success.data)
    }
  }
}
</script>

<style scoped>

</style>