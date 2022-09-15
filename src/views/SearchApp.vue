<template>
  <div>検索ページ</div>
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
  <button v-on:click="searchButton">検索！</button>
</template>

<script>
import {} from "firebase/firestore"
import {} from "/firebase"

export default {
  data() {
    return {}
  },
  methods: {
    searchButton() {
      
    },
  },
}
</script>
