<template>
  <header class="header">
    <router-link to="/about" class="header_title">タイトル</router-link>
    <div class="nav">
      <router-link to="/" class="nav_link">LogOut</router-link>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  background-color: rgb(186, 242, 250);
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.header_title {
  font-size: 50px;
  padding-left: 15px;
  text-decoration: none;
}

.nav {
  display: flex;
  padding-right: 15px;
  font-size: 20px;
}
.nav_link {
  padding-right: 30px;
  text-decoration: none;
}
</style>
