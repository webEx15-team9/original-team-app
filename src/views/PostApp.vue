<template>
  <Header></Header>
  <div class="app">
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
        <p>１１，写真（必須）</p>

        <input type="file" ref="preview" @change="uploadFile" />
        <div v-if="url">
          <img :src="url" class="picture" />
        </div>
      </div>
      <br />
      <br />
    </div>
    <br />
    <div class="form__buttons">

      <button v-on:click="postTweet" class="form__submit-button" v-if="url">
        投稿する
      </button>
      <button
        v-on:click="postTweet"
        class="form__submit-button"
        v-else
        disabled
      >
        投稿する

      </button>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "/firebase"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { getAuth, onAuthStateChanged } from "firebase/auth"
// import { deletePost } from "./views/PostApp.vue"
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
      region: "",
      prefecture: "",
      transport: "",
      worldHeritage: "",
      season: "",
      budget: "",
      stay: "",
      url: "",
      tweets: [],
    }
  },
  methods: {
    postTweet() {
      this.$router.push("/search")
      const file = this.$refs.preview.files[0]
      const storage = getStorage()
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log("Upload is " + progress + "% done")
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused")
              break
            case "running":
              console.log("Upload is running")
              break
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error)
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL)
            const tweet = {
              text: this.name,
              textDate: this.date,
              textPost: this.textPost,
              selectRegion: this.region,
              selectPrefecture: this.prefecture,
              selectTransport: this.transport,
              selectWorldHeritage: this.worldHeritage,
              selectBudget: this.budget,
              selectSeason: this.season,
              selectStay: this.stay,
              selectUrl: downloadURL,
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
          })
        }
      )
    },

    uploadFile() {
      const file = this.$refs.preview.files[0]
      this.url = URL.createObjectURL(file)
    },
  },
  created() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log("notuser")
        window.alert("ログインしてください")
        this.$router.push("/")
      }
    }),
      getDocs(collection(db, "tweets")).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
  //   })
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
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  background-color: rgb(245, 249, 249);
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  height: 850px;
}
.form__wrapper {
  padding: 2rem;
  text-align: left;
}
.form__textarea {
  width: 570px;
  height: calc(1.3rem * 3 + 1rem * 5);
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

  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  background: black;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

.form__submit-button span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: rgb(216, 223, 223);
  box-sizing: border-box;
  color: #333;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  box-shadow: 0px 7px 14px #cad4e2, -8px -8px 14px #fff;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  left: 0;
  transition-duration: 0.2s;
}

.form__submit-button:hover span {
  left: 0;
  top: 0;
  box-shadow: 0 0 6px #cad4e2, -4px -4px 6px #fff;
}

.bl_flexContainer {
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
}

.el_flexItem {
  /* padding: 2rem; */
  display: flex;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  width: 1100px;
  height: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
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
}

.picture {
  height: 300px;
  width: 300px;
}
</style>
