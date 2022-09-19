<template>
  <div>検索ページ</div>
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
  <button v-on:click="searchButton">検索！</button>
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
        <div class="second-info">写真↓</div>
        <div class="picture"><img v-bind:src="search.selectUrl" /></div>
        <br />
        <div class="second-info">感想：<br />{{ search.textPost }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocs, collection } from "firebase/firestore"
import { db } from "/firebase"

export default {
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
  margin: 0 auto;
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
.second-block {
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
</style>
