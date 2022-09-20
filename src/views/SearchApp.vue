<template>
  <Header></Header>
  <div class="search_home__wrapper">
    <div class="search_form__wrapper">
      <p>１．地方名</p>
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
    <div class="search_form__wrapper">
      <p>２．予算</p>
      <select v-model="budget">
        <option value="">選択してください</option>
        <option>5000円未満</option>
        <option>5000~1万円</option>
        <option>1~2万円</option>
        <option>2~3万円</option>
        <option>3万円以上</option>
      </select>
    </div>
    <br />
    <div class="search_form__wrapper">
      <p>３．世界遺産登録の有無</p>
      <select v-model="worldHeritage">
        <option value="">選択してください</option>
        <option>はい</option>
        <option>いいえ</option>
      </select>
    </div>
    <br />
    <div class="search_form__wrapper">
      <p>４．滞在期間</p>
      <select v-model="stay">
        <option value="">選択してください</option>
        <option>日帰り</option>
        <option>1泊2日</option>
        <option>2泊3日</option>
        <option>3泊4日</option>
        <option>4泊以上</option>
      </select>
    </div>
  </div>
  <br />

  <button v-on:click="searchButton" class="form__search-button">
    <span>検索する！</span>
  </button>
  <div v-for="(search, index) in forSearch" :key="index">
    <div class="el_flexItem">
      <br />
      <div class="first-block">
        <div class="info">名前：{{ search.text }}<br /></div>
        <div class="info">撮影日時：{{ search.textDate }}</div>


          <div class="info">地方名：{{ search.selectRegion }}</div>

          <div class="info">都道府県名：{{ search.selectPrefecture }}</div>

          <div class="info">交通手段：{{ search.selectTransport }}</div>

          <div class="info">
            世界遺産に登録されていますか？：{{ search.selectWorldHeritage }}
          </div>

          <div class="info">季節：{{ search.selectSeason }}</div>
          <div class="info">予算：{{ search.selectBudget }}</div>
          <div class="info">滞在期間：{{ search.selectStay }}</div>
        </div>
        <div class="second-block">
          <div class="second-info">感想：<br />{{ search.textPost }}</div>
        </div>
        <div class="third-block">
          <div class="third-info">
            <img v-bind:src="search.selectUrl" class="picture" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { getDocs, collection } from "firebase/firestore"
import { db } from "/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      region: "",
      budget: "",
      worldHeritage: "",
      stay: "",
      forSearch: [],
    }
  },
  methods: {
    async searchButton() {
      this.forSearch = []
      await getDocs(collection(db, "tweets")).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.forSearch.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
      if (
        this.region !== "" ||
        this.budget !== "" ||
        this.worldHeritage !== "" ||
        this.stay !== ""
      ) {
        let searchRegion = []
        for (let i = 0; i < this.forSearch.length; i++) {
          if (
            this.forSearch[i].selectRegion === this.region ||
            this.forSearch[i].selectBudget === this.budget ||
            this.forSearch[i].selectWorldHeritage === this.worldHeritage ||
            this.forSearch[i].selectStay === this.stay
          ) {
            searchRegion.push(this.forSearch[i])
          }
        }
        this.forSearch = searchRegion
      }
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
          this.forSearch.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>

<style>
.search_home__wrapper {
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  max-width: 1200px;
  background-color: rgb(245, 249, 249);
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  text-align: center;
  justify-content: center;
}
.search_form__wrapper {
  padding: 2rem;
  text-align: left;
}


.form__search-button {
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

.form__search-button span {
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

.form__search-button:hover span {
  left: 0;
  top: 0;
  box-shadow: 0 0 6px #cad4e2, -4px -4px 6px #fff;
}


.el_flexItem {
  padding: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  /* margin: 200px; */
  text-align: center;
  width: 1200px;
  height: 380px;

  margin-left: auto;
  margin-right: auto;

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
.second-block {
  width: 150px;
  padding: 20px;
  text-align: right;
  justify-content: right;
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
.third-block {
  text-align: right;
  justify-content: right;
  padding: 20px;
}
.third-info {
  padding-left: 100px;
  padding-top: 20px;
}
.picture {
  height: 300px;
  width: 300px;
}
</style>
