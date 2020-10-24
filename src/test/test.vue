<template>
<div id="#app2">
  <p>商品一花费了${{ (productOneCast /100).toFixed(2) }}</p>
  <p>商品二花费了${{ (productTwoCast /100).toFixed(2) }}</p>
  <p>商品三花费了${{ (productThreeCast /100).toFixed(2) }}</p>
  <p>商品四花费了{{ productFourCast | formatCost }}</p>
  <p>商品五花费了{{ productFiveCast | formatCost }}</p>
  <button @click="increase">点击增加计数</button>
  <p>你已经点击了按钮{{counter1}}次}</p>
  <p @keyup.enter="handleEnter">{{number1}}</p>
  <div v-blink2="500">shining</div>
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

//自定义组件
Vue.directive('blink', {
  bind(el) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, 1000)
  }
})

Vue.directive('blink2', {
  bind(el, binding) {
    let isVisible = true; setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden'
    }, binding.value || 1000)
  }
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
      productFiveCast: 8999,
      counter1: 0,
      number1: 1
    }
  },
  // filters: { // Vue中的过滤函数 {{文本字符串 | 过滤函数}}
  //   formatCost(value) {
  //     return '$' + (value / 100).toFixed(2);
  //   }
  // }
  methods: {
    increase(e) {  // 使用@click 代替 v-on:click
      this.counter1++;
    },
    handleEnter(e) {
      this.number1 += 100;
    }
  },
  //
  mounted () {
    this.$nextTick(() => {
      //确定元素已经被添加到了DOM上
    })
  }
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
