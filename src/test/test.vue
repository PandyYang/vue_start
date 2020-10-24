<template>
<div id="#app2">
  <p>商品一花费了${{ (productOneCast /100).toFixed(2) }}</p>
  <p>商品二花费了${{ (productTwoCast /100).toFixed(2) }}</p>
  <p>商品三花费了${{ (productThreeCast /100).toFixed(2) }}</p>
  <p>商品四花费了{{ productFourCast | formatCost }}</p>
  <p>商品五花费了{{ productFiveCast | formatCost }}</p>
  <Footer></Footer>
</div>
</template>

<script>
import Footer from '../components/Footer'
import Vue from 'vue'
// 注册全局过滤器
Vue.filter('formatCost', function (value) {
  return (value / 100).toFixed(2);
})

export default {
  name: 'index',
  components: {Footer},
  data() {
    return {
      productOneCast:988,
      productTwoCast:2399,
      productThreeCast: 5300,
      productFourCast: 7888,
      productFiveCast: 8999
    }
  },
  // filters: { // Vue中的过滤函数 {{文本字符串 | 过滤函数}}
  //   formatCost(value) {
  //     return '$' + (value / 100).toFixed(2);
  //   }
  // }
}

// new Vue({
//   el: '#app2',
//   data: {
//     productOneCast: 988,
//     productTwoCast: 2399,
//     productThreeCast: 5300
//   }
// })
</script>

<style scoped>

</style>
