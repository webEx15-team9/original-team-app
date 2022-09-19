<template>
  <div class="home">
    <div class="intro">タイトルへようこそ！</div>
    <div>
      <button v-on:click="login" class="googlelogin">
        Googleアカウントでログイン
      </button>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  methods: {
    login() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          localStorage.token = credential.accessToken
          const user = result.user
          console.log(user)

          this.$router.push({ path: "/about" })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          window.alert(errorCode, errorMessage)
        })
    },
  },
}
</script>

<style>
.home {
  height: 100vh;
  background-color: rgb(186, 242, 250);
}

.intro {
  font-size: 50px;
  padding: 50px;
}

.googlelogin {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 10px 20px;
  width: 350px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  background-color: rgb(223, 223, 223);
  border: 1px solid rgb(187, 186, 186);
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
}

.googlelogin::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #3d9ec8;
  transition: 0.2s;
}

.googlelogin ::after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid rgb(209, 209, 209);
  border-right: 3px solid rgb(209, 209, 209);
  transform: rotate(45deg);
}

.googlelogin:hover::before {
  top: 0;
  left: 0;
}
</style>
