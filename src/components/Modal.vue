<template>
  <div class="black-bg" v-if="showModal===true" >
    <div class="white-bg">
      <h4>{{ products[selected].title }}</h4>
      <p>{{ products[selected].content }}</p>
      <input v-model.number="month">
      <p>{{ month }} 개월 선택됨</p>
      <button @click="$emit('closeModal', false)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'ModalVue',
  data(){
    return {
      month : 1
    }
  },
  watch: {
    // 감시할 데이터와 같은 이름으로 함수를 작성한다.
    // month라는 데이터가 변화할 때마다 이 함수가 실행된다.
    month(m){
      if (m < 1) {
        alert('계약기간은 최소 1개월입니다.')
      }

      else if (typeof(m) !== "number") {
        alert('숫자를 입력해주세요')
        this.month = 1
      }
    }
  },
  props:{
    products : Object,
    selected : Number,
    showModal : Boolean
  }
}
</script>

<style>
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 30px;
  top:0;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>