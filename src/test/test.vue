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
  <button @click="divVisible = !divVisible">切换可见性</button>
  <div v-if="divVisible">这段内同会时隐时现</div>
  <transition name="fade">
    <div v-if="divVisible">This content is sometimes hidden</div>
  </transition>
  <custom-button></custom-button>
  <positive-numbers></positive-numbers>
  <display-number v-bind:number2="number2"></display-number>
  <color-preview color="red"></color-preview>
  <input-username v-model="username"></input-username>
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

//创建一个组件
const CustomButton = {
  template: '<button>自定义按钮</button>'
}

//定义全局组件
Vue.component('positive-numbers', {
  template: '<p>有{{positiveNumbers.length}}个正数</p>',
  data() {
    return {
      numbers: [-6,-3,-34,-33,-23,2,45,6,234,5,3]
    }
  },
  computed: {
    positiveNumbers() {
      return this.numbers.filter((res) => res>0)
    }
  }
})

//
Vue.component('color-preview', {
  template: '<div class="color-preview" :style="style"></div>',
  props: ['color'],
  computed: {
    style() {
      return {backgroundColor: this.color}
    }
  }
})

//prop验证
Vue.component('price-display',{
  props: {
    price: Number,
    unit: String
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

//prop也是响应式的
Vue.component('display-number',{
  template: '<p>当前的数字是{{number2}}</p>',
  props: {
    number2: {
      type: Number,
      required: true
    }
  }
})

Vue.component('count-from-number', {
  template: '<p>当前数字是{{localNumber}}</p>',
  data() {
    return {
      number: this.initialNumber
    }
  },
  props: {
    initialNumber: {
      type: Number,
      required: true
    }
  },
  computed: {
    localNumber: {
      get() {
        return this.number;
      },
      set(value) {
        this.$emit('update:number', value)
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.localNumber ++;
    }, 1000);
  }
})

//自定义输入组件
Vue.component('input-username', {
  template: '<input type="text" :value="value" @input=""handleInput>',
  data() {
    return {
      username: ''
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value.toLowerCase();
      if (value !== e.target.value) {
        e.target.value = value
      }
      this.$emit('input', value)
    }
  }
})
export default {
  name: 'index',
  components: {Footer, CustomButton},
  data() {
    return {
      productOneCast:988,
      productTwoCast:2399,
      productThreeCast: 5300,
      productFourCast: 7888,
      productFiveCast: 8999,
      counter1: 0,
      number1: 1,
      divVisible: true,
      number2: 0,
      username: ''
    }
  },
  created () {
    setInterval(() => {
      this.number2++;
    }, 1000)
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
