<!-- <template>
  <div class="home__wrapper">
    <div class="form__wrapper">
      <textarea
        class="form__textarea"
        v-model="text"
        placeholder="入力してください"
      />
      <div><h6>画像を選んでください</h6></div>
      <div class="form__buttons">
        <button v-on:click="PostTweet" class="form__submit-button">投稿</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    PostTweet() {
      alert("投稿機能の完成をお楽しみに！")
    },
  },
}
</script>

<style scoped>
.home__wrapper {
  margin: 0 auto;
  max-width: 500px;
  background-color: #ccc;
}
.form__wrapper {
  padding: 2rem;
}
.form__textarea {
  width: 100%;
  height: calc(1.3rem * 3 + 0.5rem * 2);
  padding: 0.5rem;
  line-height: 1.3rem;
  border-radius: 5px;
  border: none;
  resize: none;
}
.form__textarea:focus {
  outline: none;
}
.form__buttons {
  display: flex;
  justify-content: flex-end;
}
</style> -->

<template>
  <div class="app">
    <h2>投稿ページ</h2>
    <div class="home__wrapper">
      <div class="form__wrapper">
        <p>１，場所の名前</p>
        <input v-model="name" placeholder="名前" />
        <br />
        <p>２，撮影日時</p>
        <input type="date" v-model="date" placeholder="none" />
        <br />
        <p>３，感想</p>
        <textarea
          class="form__textarea"
          v-model="textPost"
          placeholder="感想"
        ></textarea>
        <p>４、写真</p>
        <br />
        <br />
        <div class="form__buttons">
          <button v-on:click="postTweet" class="form__submit-button">
            投稿！！
          </button>
        </div>
      </div>
    </div>
    <ul class="bl_flexContainer">
      <div v-for="tweet in tweets" :key="tweet.id">
        <li class="el_flexItem">
          <br />
          <div>名前：{{ tweet.text }}</div>
          <br />
          <div>撮影日時：{{ tweet.text2 }}</div>
          <br />
          <div>感想：{{ tweet.text3 }}</div>
          <br />
          <div>写真↓</div>
          <br />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
/* 変更点１ */
import { collection, addDoc } from "firebase/firestore"
import { db } from "/firebase"

export default {
  data() {
    return {
      textPost: "",
      date: "",
      name: "",
      /* 変更点２ */
      tweets: [],
    }
  },
  methods: {
    postTweet() {
      /* 変更点１ */
      const tweet = {
        text: this.name,
        text2: this.date,
        text3: this.textPost,
      }
      addDoc(collection(db, "tweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        })
        {
          alert("投稿してくれてありがとう！！！")
        }
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style scoped>
.home__wrapper {
  margin: 0 auto;
  max-width: 500px;
  background-color: rgb(233, 241, 241);
}
.form__wrapper {
  padding: 2rem;
  text-align: left;
}
.form__textarea {
  width: 100%;
  height: calc(1.3rem * 3 + 0.5rem * 2);
  padding: 0.5rem;
  line-height: 1.3rem;
  border-radius: 5px;
  border: none;
  resize: none;
}
.form__textarea:focus {
  outline: none;
}
.form__buttons {
  display: flex;
  justify-content: center;
}
.form__submit-button {
  text-align: center;
  font-weight: 600;
}
.bl_flexContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.el_flexItem {
  width: 1400px;
  height: 380px;
  /* margin-right: 35px; */
  margin-left: 1px;
  margin-bottom: 30px;
  background-color: rgb(169, 233, 163);
  list-style: none;
  border-radius: 2%;
  border-style: solid;
  border-color: green;
  font-style: italic;
  font-weight: 600;
}
</style>
