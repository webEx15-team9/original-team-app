<template>
  <div class="slideshow">
    <carousel :wrap-around="true" :autoplay="2000" :transition="5000">
      <slide v-for="image in images" :key="image">
        <img v-bind:src="image.src" class="slideImage" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination } from "vue3-carousel"
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      images: [
        { src: require("@/assets/スカイツリー.jpg") },
        { src: require("@/assets/伊勢神宮.jpg") },
        { src: require("@/assets/厳島神社.jpg") },
        { src: require("@/assets/清水寺.jpg") },
        { src: require("@/assets/石垣島.jpg") },
        { src: require("@/assets/天橋立.jpg") },
        { src: require("@/assets/富士山.jpg") },
      ],
    }
  },
}
</script>

<style>
.slideImage {
  display: inline-block;
  height: 50vh;
}
.slideshow {
  margin-left: auto;
  margin-right: auto;
  min-width: 80%;
}
.slideImage__prev--in-active,
.slideImage__next--in-active {
  display: none;
}
</style>
