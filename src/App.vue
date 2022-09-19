<template>
  <div class="app">
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#drawer-navigation {
  display: none;
}
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
