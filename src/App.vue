<template>
  <div class="app">
    <Header></Header>
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
}
</script>

<style>
#app {
  text-align: center;
  overflow: hidden;
}
.body {
  padding: 20px;
  background-color: rgb(213, 250, 196);
}
.nav_link_about {
  font-size: 50px;
}
</style>
