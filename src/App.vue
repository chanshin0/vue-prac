<template>
  <div class="menu">
    <a :href="title.toLowerCase()" v-for="title in nav" :key="title">{{ title }}</a>
  </div>

  <!-- 1. 라우터 뷰, 라우터 링크 -->
  <!-- 2. 파니아 사용법 -->
  <Transition name="fade">
    <AdsVue v-if="discountRate > 0" :discountRate="discountRate"/>
  </Transition>

  <img alt="Vue logo" src="./assets/logo.png">
  
  <!-- <router-view></router-view> -->
  <div>
    <button @click="products = products.sort((a,b)=>a.price - b.price)">가격 내림차순</button>
    <button @click="products = products.sort((a,b)=>b.price - a.price)">가격 오름차순</button>
    <button @click="products = productsOrigin">되돌리기</button>
  </div>

  <CardVue v-for="(p,i) in products" :key="i" :product="p" @showModal="showModal = true; selected = i"
  @abuse="products[$event].abuse += 1"
  />

  <Transition name="fade">
    <ModalVue :products="products" :selected="selected" :showModal="showModal" @closeModal="showModal = $event"
    />
  </Transition>
</template>

<script>
import AdsVue from './components/Ads.vue'
import ModalVue from './components/Modal.vue'
import CardVue from './components/Card.vue'
import {products} from "./post"

export default {
  name: 'App',
  data(){
    return {
      nav : ['Home', 'Shop', 'About'],
      productsOrigin : [...products], // 깊은 복사 필요
      products,
      showModal: false,
      selected : 0,
      discountRate : 20
    }
  },
  methods : {
    abuse_increase(i) {
      this.products[i].abuse += 1
    }
  },
  mounted() {
    setInterval(()=>{
      this.discountRate -= 1
    }, 1000)
  },  
  components: {
    AdsVue,
    ModalVue,
    CardVue
  },
  updated(){
    // console.log(this.productsOrigin[2].price)
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
