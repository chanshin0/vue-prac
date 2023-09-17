<template>
  <div class="discount">
    <h4>
      지금 결제하면 {{discountRate}}% 할인!!
    </h4>
  </div>
</template>

<script>
export default {
  name: 'AdsVue',
  props: {
    discountRate: Number
  }
}
</script>

<style>
.discount {
  background: rgb(190, 190, 190);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>