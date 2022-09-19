<template>
  <Header></Header>
  <div class="fixed-background background-1">
    <div class="question">
      こんな悩みを持ったことはありますか？
      <div>
        <img src="@/assets/はてな猫.png" class="question-cat-image" />
      </div>
    </div>
  </div>
  <div class="scroll-background background-color-1">
    <div class="question-detail">
      <div class="question-image">
        <img src="@/assets/悩んでいる.png" class="question-image" />
      </div>
      <div class="bubble">
        <div class="question-detail-ex">
          <div>どこか出かけたいけど行く場所が決まらない！</div>
          <div>忙しくて遠出できないけど、絶景写真を見て癒されたい！etc...</div>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed-background background-2">
    <div class="about">
      <div class="about-con">このサイトはそんな悩みを解消します！</div>
    </div>
  </div>
  <div class="scroll-background background-color-2">
    <div class="about-detail">
      <div>このサイトでは、日本各地の絶景写真を紹介しています！</div>
      <div>
        さらに実際に行った人の感想やかかった費用も見られるので、お出かけするときの参考にしてみてください！
      </div>
      <div class="slideshow-zekkei">
        <Slide></Slide>
      </div>
    </div>
  </div>
  <div class="fixed-background background-3">
    <div class="background-color">
      <div class="function">
        いろんな機能があります！見てみてね！
        <div class="function-detail">
          <div class="function-detail_search">
            <router-link to="/search" class="nav_link_function"
              >検索機能
            </router-link>
            <div class="function-detail_search-ex">
              様々な条件で絶景を探してみよう！
            </div>
          </div>
          <div class="function-detail_post">
            <router-link to="/post" class="nav_link_function"
              >投稿機能</router-link
            >
            <div class="function-detail_post-ex">
              実際に撮った絶景写真をシェアしてみよう！
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Slide from "@/views/SlideApp.vue"
export default {
  components: {
    Header,
    Footer,
    Slide,
  },
}
</script>

<style>
.fixed-background {
  min-height: 100vh;
  background-attachment: fixed;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-1 {
  background-image: url(../assets/白レンガ.jpg);
}

.question {
  font-size: 50px;
}

.question-cat-image {
  width: 400px;
  margin-top: 250px;
  justify-content: center;
}

.background-color-1 {
  background-color: rgb(182, 182, 182);
}

.question-detail {
  color: white;
  font-size: 30px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.question-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 40%;
}

.bubble {
  position: relative;
  display: inline-block;
  background-color: rgb(182, 182, 182);
  border-radius: 30px;
  padding: 40px;
  border: 2px solid white;
}

.bubble:before {
  content: "";
  position: absolute;
  left: -5%;
  width: 5%;
  height: 25%;
  background: rgb(182, 182, 182);
  border-radius: 50%;
  border: 2px solid white;
}

.bubble:after {
  content: "";
  position: absolute;
  left: -10%;
  width: 3%;
  height: 15%;
  bottom: 40%;
  background: rgb(182, 182, 182);
  border-radius: 50%;
  border: 2px solid white;
}

.background-2 {
}

.about-con {
  font-size: 50px;
  border-bottom: dashed 2px #87cefa;
}

.background-color-2 {
  background-color: rgb(182, 182, 182);
}

.about-detail {
  color: white;
  font-size: 30px;
  padding: 40px;
}

.slideshow-zekkei {
  margin-top: 50px;
}

.background-3 {
  background-image: url(../assets/客船.jpg);
}

.background-color {
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
}

.function {
  margin: 300px;
  align-items: center;
  font-size: 50px;
}

.function-detail {
  display: flex;
  justify-content: space-around;
  margin: 50px;
}

.nav_link_function {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 10px 20px;
  width: 200px;
  color: #333;
  font-size: 40px;
  font-weight: 700;
  background-color: #ccc;
  border-radius: 50vh;
  transition: 0.3s;
  text-decoration: none;
}

.nav_link_function::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #3d9ec8;
  border-radius: 50vh;
  transition: 0.2s;
}

.nav_link_function::after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
  transform: rotate(45deg);
}

.nav_link_function:hover::before {
  top: 0;
  left: 0;
}

.function-detail_search-ex {
  font-size: 20px;
  margin-top: 8px;
  font-weight: bold;
}

.function-detail_post-ex {
  font-size: 20px;
  margin-top: 8px;
  font-weight: bold;
}
</style>
