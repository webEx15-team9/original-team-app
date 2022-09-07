<template>
  <div class="sliderImage">
    <carousel :per-page="2" :speed="500">
      <slide>
        <img src="@/assets/スカイツリー.jpg" class="zekkeiPhoto" />
      </slide>
      <slide>
        <img src="@/assets/伊勢神宮.jpg" class="zekkeiPhoto" />
      </slide>
      <slide>
        <img src="@/assets/清水寺.jpg" class="zekkeiPhoto" />
      </slide>
      <slide>
        <img src="@/assets/石垣島.jpg" class="zekkeiPhoto" />
      </slide>
      <slide>
        <img src="@/assets/天橋立.jpg" class="zekkeiPhoto" />
      </slide>
      <slide>
        <img src="@/assets/富士山.jpg" class="zekkeiPhoto" />
      </slide>
      <slide>
        <img src="@/assets/厳島神社.jpg" class="zekkeiPhoto" />
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
