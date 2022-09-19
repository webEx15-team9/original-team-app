<template>
  <div class="app">
    <div v-show="isDisplay">
      <Header></Header>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isDisplay: true,
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

Header {
  display: none;
}

.app {
  text-align: center;
  overflow: hidden;
}
.body {
  background-color: white;
}
.nav_link_about {
  font-size: 50px;
}
</style>
