<template>
  <header class="header">
    <router-link to="/about" class="header_title">
      <img src="../assets/ロゴ.png" class="header_logo" />
    </router-link>
    <div class="nav">
      <router-link to="/search" class="nav_link">SEARCH</router-link>
      <div class="border">|</div>
      <router-link to="/post" class="nav_link">POST</router-link>
      <div class="border">|</div>
      <router-link to="/" class="nav_link">LOGOUT</router-link>
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

.header_logo {
  width: 5vw;
  padding-left: 4vw;
}

.nav {
  display: flex;
  padding-right: 1vw;
  font-size: 1vw;
}
.nav_link {
  margin: 0px 30px;
  text-decoration: none;
  color: black;
}

.nav_link:hover {
  font-weight: 600;
  color: black;
}

.border {
  width: 50px;
}
</style>
