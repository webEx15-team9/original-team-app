<template>
  <div class="sliderImage">
    <carousel :per-page="2" :speed="500">
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%84%E3%83%AA%E3%83%BC.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E4%BC%8A%E5%8B%A2%E7%A5%9E%E5%AE%AE.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E5%8E%B3%E5%B3%B6%E7%A5%9E%E7%A4%BE.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E5%A4%A9%E6%A9%8B%E7%AB%8B.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E5%AF%8C%E5%A3%AB%E5%B1%B1.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E6%B8%85%E6%B0%B4%E5%AF%BA.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <slide>
        <img
          src="https://github.com/webEx15-team9/original-team-app/blob/slide/src/assets/%E7%9F%B3%E5%9E%A3%E5%B3%B6.jpg?raw=true"
          class="zekkeiPhoto"
        />
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import { carousel, slide, navigation, pagination } from "vue3-carousel"
export default {
  components: {
    carousel,
    slide,
    navigation,
    pagination,
  },
}
</script>

<style>
.zekkeiPhoto {
  display: inline-block;
  height: 300px;
  margin-right: 25px;
}
</style>
