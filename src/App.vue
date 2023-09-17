<template>
  <div class="menu">
    <a href="" v-for="title in nav" :key="title">{{ title }}</a>
  </div>

  <Transition name="fade">
    <AdsVue v-if="showAds === true"/>
  </Transition>

  <!-- 1. 카드 컴포넌트로 바꾸기 -->
  <!-- 2. 가격 순 정렬과 되돌리기 버튼 만들기 -->
  <!-- 3. 1초마다 할인이 1%씩 감소하게 만들기 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="(p, i) in products" :key="i">
    <hr>
    <div @click="showModal = true; selected = i;">
      <img :src="p.image" alt="">
      <h4>제목 : {{ p.title }}</h4>
      <p>본문 : {{ p.content }}</p>
      <p>가격 : {{ p.price }} 원</p>
    </div>
    <button @click="()=>abuse_increase(i)">허위매물 신고</button>
    <span>신고수 : {{ p.abuse }}</span>
  </div>

  <Transition name="fade">
    <ModalVue :products="products" :selected="selected" :showModal="showModal" @closeModal="showModal = $event"/>
  </Transition>
  </template>

<script>
import AdsVue from './components/Ads.vue'
import ModalVue from './components/Modal.vue'
import {products} from "./post"

export default {
  name: 'App',
  data(){
    return {
      nav : ['Home', 'Shop', 'About'],
      products,
      showModal: false,
      selected : 0,
      showAds : true
    }
  },
  methods : {
    abuse_increase(i) {
      this.products[i].abuse += 1
    }
  },
  mounted() {
    setTimeout(()=>{
      this.showAds = false
    }, 2000)
  },  
  components: {
    AdsVue,
    ModalVue
  }
}
</script>

<style>
/* 시작시 */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
/* 끝났을 시 */
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {

}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  transform: translateY(-1000px);
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
