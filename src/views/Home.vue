<template>
  <div class="home">
    <router-link to="/about" class="nav_link_about">About</router-link>
    <div class="content">いろんな機能↓↓</div>
    <div class="function_details">
      <router-link to="/search" class="nav_link_function">検索機能</router-link>
      <router-link to="/post" class="nav_link_function">投稿機能</router-link>
    </div>
  </div>
</template>

<style>
.nav_link_about {
  text-decoration: none;
}

.content {
  font-size: 30px;
  padding-top: 20px;
}

.function_details {
  padding: 10px;
}

.nav_link_function {
  text-align: center;
  margin: 20px;
  font-size: 20px;
  text-decoration: none;
}
</style>
