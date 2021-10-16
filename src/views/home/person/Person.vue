<template>
  <div>
    <page-head class="has-background-info">
        <div slot="left" class="sidebar">
              Mine
        </div>
    </page-head>
    <div class="box" style="height: 100px">
      <article class="media">
        <div class="media-left" >
          <figure class="image is-128x128" style="bottom: 8px">
            <img class="is-rounded" src="~assets/img/home/img-8e2c27a1a7510d3b73317e96ec2f4b72.jpg" >
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Mr.Zhou</strong> <small>@zhouhui</small>
              <br>
            </p>
          </div>
        </div>
      </article>
    </div>
    <div>
      <br>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>The answer must be in the attempt.
            </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          你所追寻的答案一定会在努力探索中展现。<cite title="Source Title" >{{nowDate}}</cite>
        </figcaption>
      </figure>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~assets/img/home/img-5edfade9ce6c1d5fdb420a898d1c19bb.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="~assets/img/home/img-7a416a4aac78886068c7f2abc16aa345.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="~assets/img/home/img-8c9ee3bb642b427fe099861f65828447.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
<!--    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>-->
    </div>
</template>

<script>
import moment from 'moment'
import PageHead from "components/common/head/PageHead";
export default {
  name: "Person",
  components: {
    PageHead
  },
  data() {
    return {
      nowDate: "", // 当前日期
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
   /*   let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;*/
      this.nowDate = moment().format("YYYY-MM-DD HH:mm:ss")
    }
  },
  mounted() {
    this.currentTime();
  },
  created() {
    this.formatDate()
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/css/bootstrap"
</style>

<style scoped>
.sidebar{
  text-align: center;
  margin-top: 15px;
}
</style>

<!--<script src="bootstrap/dist/js/bootstrap.bundle.min"></script>-->
<!--
<script lang="js">
@import()
</script>-->
