<template>
    <div>
      <hr>
      <div @click="$emit('showModal')">
        <img :src="product.image" alt="" class="room-img">
        <h4>제목 : {{ product.title }}</h4>
        <p>본문 : {{ product.content }}</p>
        <p>가격 : {{ product.price }} 원</p>
      </div>
      <button @click="$emit('abuse', product.id)">허위매물 신고</button>
      <span>신고수 : {{ product.abuse }}</span>
    </div>
</template>

<script>
export default {
  name:'CardVue',
  props: {
    product:Object
  }
}
</script>

<style>
.room-img {
  width: 70%;
}
</style>