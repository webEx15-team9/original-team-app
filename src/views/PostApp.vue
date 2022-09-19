<template>
  <Header></Header>
  <div class="app">
    <h2>投稿ページ</h2>
    <div class="home__wrapper">
      <div class="form__wrapper">
        <p>１，場所の名前</p>
        <input v-model="name" placeholder="名前" />
      </div>
      <div class="form__wrapper">
        <p>２，地方名</p>
        <select name="sample" v-model="region">
          <option value="">選択してください</option>
          <option value="北海道">北海道</option>
          <option value="東北">東北</option>
          <option value="関東">関東</option>
          <option value="中部">中部</option>
          <option value="関西">関西</option>
          <option value="中国">中国</option>
          <option value="四国">四国</option>
          <option value="九州・沖縄">九州・沖縄</option>
        </select>
      </div>
      <br />
      <div class="form__wrapper">
        <p>３，都道府県名</p>
        <select v-model="prefecture">
          <option value="" selected>選択してください</option>
          <option value="北海道">北海道</option>
          <option value="青森県">青森県</option>
          <option value="岩手県">岩手県</option>
          <option value="宮城県">宮城県</option>
          <option value="秋田県">秋田県</option>
          <option value="山形県">山形県</option>
          <option value="福島県">福島県</option>
          <option value="茨城県">茨城県</option>
          <option value="栃木県">栃木県</option>
          <option value="群馬県">群馬県</option>
          <option value="埼玉県">埼玉県</option>
          <option value="千葉県">千葉県</option>
          <option value="東京都">東京都</option>
          <option value="神奈川県">神奈川県</option>
          <option value="新潟県">新潟県</option>
          <option value="富山県">富山県</option>
          <option value="石川県">石川県</option>
          <option value="福井県">福井県</option>
          <option value="山梨県">山梨県</option>
          <option value="長野県">長野県</option>
          <option value="岐阜県">岐阜県</option>
          <option value="静岡県">静岡県</option>
          <option value="愛知県">愛知県</option>
          <option value="三重県">三重県</option>
          <option value="滋賀県">滋賀県</option>
          <option value="京都府">京都府</option>
          <option value="大阪府">大阪府</option>
          <option value="兵庫県">兵庫県</option>
          <option value="奈良県">奈良県</option>
          <option value="和歌山県">和歌山県</option>
          <option value="鳥取県">鳥取県</option>
          <option value="島根県">島根県</option>
          <option value="岡山県">岡山県</option>
          <option value="広島県">広島県</option>
          <option value="山口県">山口県</option>
          <option value="徳島県">徳島県</option>
          <option value="香川県">香川県</option>
          <option value="愛媛県">愛媛県</option>
          <option value="高知県">高知県</option>
          <option value="福岡県">福岡県</option>
          <option value="佐賀県">佐賀県</option>
          <option value="長崎県">長崎県</option>
          <option value="熊本県">熊本県</option>
          <option value="大分県">大分県</option>
          <option value="宮崎県">宮崎県</option>
          <option value="鹿児島県">鹿児島県</option>
          <option value="沖縄県">沖縄県</option>
        </select>
      </div>
      <div class="form__wrapper">
        <p>４，交通手段</p>
        <select v-model="transport">
          <option selected>選択してください</option>
          <option>徒歩</option>
          <option>自家用車</option>
          <option>バス</option>
          <option>電車</option>
          <option>飛行機</option>
        </select>
      </div>
      <div class="form__wrapper">
        <p>５，世界遺産に登録されていますか？</p>
        <select v-model="worldHeritage">
          <option selected>選択してください</option>
          <option>はい</option>
          <option>いいえ</option>
        </select>
      </div>
      <div class="form__wrapper">
        <p>６，季節</p>
        <select v-model="season">
          <option selected>選択してください</option>
          <option>1月</option>
          <option>2月</option>
          <option>3月</option>
          <option>4月</option>
          <option>5月</option>
          <option>6月</option>
          <option>7月</option>
          <option>8月</option>
          <option>9月</option>
          <option>10月</option>
          <option>11月</option>
          <option>12月</option>
        </select>
      </div>
      <div class="form__wrapper">
        <p>７，撮影日時</p>
        <input type="date" v-model="date" placeholder="none" />
      </div>
      <div class="form__wrapper">
        <p>８，予算</p>
        <select v-model="budget">
          <option selected>選択してください</option>
          <option>5000円未満</option>
          <option>5000~1万円</option>
          <option>1~2万円</option>
          <option>2~3万円</option>
          <option>3万円以上</option>
        </select>
      </div>
      <div class="form__wrapper">
        <p>９，滞在期間</p>
        <select v-model="stay">
          <option selected>選択してください</option>
          <option>日帰り</option>
          <option>1泊2日</option>
          <option>2泊3日</option>
          <option>3泊4日</option>
          <option>4泊以上</option>
        </select>
      </div>
      <div class="form__wrapper">
        <p>１０，感想</p>
        <textarea
          class="form__textarea"
          v-model="textPost"
          placeholder="感想"
        ></textarea>
      </div>
      <div class="form__wrapper">
        <p>１１，写真</p>
      </div>
      <br />
      <br />
    </div>
    <br />
    <div class="form__buttons">
      <button v-on:click="postTweet" class="form__submit-button">
        投稿する
      </button>
    </div>
  </div>

  <div class="bl_flexContainer">
    <div v-for="tweet in tweets" :key="tweet.id">
      <div class="el_flexItem">
        <br />
        <div class="first-block">
          <div class="info">名前：{{ tweet.text }}<br /></div>
          <div class="info">撮影日時：{{ tweet.text2 }}</div>

          <div class="info">地方名：{{ tweet.select }}</div>

          <div class="info">都道府県名：{{ tweet.select2 }}</div>

          <div class="info">交通手段：{{ tweet.select3 }}</div>

          <div class="info">
            世界遺産に登録されていますか？：{{ tweet.select4 }}
          </div>

          <div class="info">季節：{{ tweet.select5 }}</div>

          <div class="info">滞在期間：{{ tweet.select6 }}</div>
        </div>
        <div class="second-block">
          <div class="second-info">写真↓</div>
          <br />
          <div class="second-info">感想：<br />{{ tweet.text3 }}</div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "/firebase"

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      textPost: "",
      date: "",
      name: "",
      region: null,
      prefecture: null,
      transport: null,
      worldHeritage: null,
      season: null,
      stay: null,

      tweets: [],
    }
  },
  methods: {
    postTweet() {
      const tweet = {
        text: this.name,
        text2: this.date,
        text3: this.textPost,
        select: this.region,
        select2: this.prefecture,
        select3: this.transport,
        select4: this.worldHeritage,
        select5: this.season,
        select6: this.stay,
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
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
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
  justify-content: center;
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
  max-width: 1200px;
  background-color: rgb(245, 249, 249);
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.form__wrapper {
  padding: 2rem;
  text-align: left;
}
.form__textarea {
  width: 570px;
  height: calc(1.3rem * 3 + 1rem * 2);
  padding: 0.5rem;
  line-height: 1.3rem;
  border-radius: 5px;
  border-color: black;
  resize: none;
}
.form__textarea:focus {
  outline: none;
}
.form__buttons {
  justify-content: center;
  text-align: center;
}
.form__submit-button {
  width: 140px;
  height: 70px;
  text-align: center;
  font-weight: 600;
  border-radius: 50%;
  background-color: rgb(247, 250, 247);
  font-size: large;
}
.bl_flexContainer {
  justify-content: center;
  text-align: center;
}
.el_flexItem {
  /* padding: 2rem; */
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin: 100px;
  text-align: center;
  width: 1100px;
  height: 380px;
  margin-left: 180px;
  margin-bottom: 30px;
  background-color: rgb(169, 233, 163);
  list-style: none;
  border-radius: 2%;
  border-style: solid;
  border-color: green;
  font-style: italic;
  font-weight: 600;
}
.first-block {
  display: table-column;
  text-align: left;
  justify-content: left;
  padding: 20px;
}
.info {
  top: 5px;
  left: 200px;
  margin: 15px;
}
.second-info {
  top: 5px;
  margin-left: 300px;
  margin: 20px;
  text-align: left;
}
.second-block {
  padding: 20px;
  text-align: right;
  justify-content: right;
}
</style>
