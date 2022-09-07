<template>
  <span class="about">About</span>
  <h2></h2>
  <img
    class="about-image"
    src="https://ptl.imagegateway.net/contents/original/photocontest/47pref2018/result/img/area/s_yamanashi07.jpg"
    alt="画像1"
  />
  <div class="content">
    <h4>サイト説明</h4>
    <h6>このサイトは日本各地の素敵な景色をたくさん見れるサイトです！</h6>
    <h6>素敵な景色を見つけたら投稿ページからシェアしてね！</h6>
    <h6>みんなの投稿待ってます☆</h6>
    <img
      class="about-image"
      src="https://ptl.imagegateway.net/contents/original/photocontest/47pref2018/result/img/area/s_yamanashi07.jpg"
      alt="画像1"
      width="300"
    />
  </div>

  <div>
    <button v-on:click="googleLogin">ログイン</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.about {
  font-size: 50px;
  padding-top: 20px;
  border-bottom: solid;
}
</style>
