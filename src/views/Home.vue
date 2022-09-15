<template>
  <div class="home">
    <div class="intro">タイトルへようこそ！</div>
    <div>
      <router-link to="/login" class="nav_link">Login</router-link>
    </div>
    <div>
      <router-link to="/about" class="nav_link_about">About</router-link>
    </div>
  </div>
</template>

<style>
.home {
  min-height: 100vh;
  background-color: rgb(186, 242, 250);
}

.intro {
  font-size: 50px;
}

.nav_link_about {
  text-decoration: none;
}
</style>
