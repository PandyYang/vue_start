<template>
  <div>
    <h1>主页组件Home</h1>
    <div style="width: 100%;height: 300px;background: #ff0000">
      内容
    </div>
    <!--使用组件-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer' // 引入组件
export default {
  name: 'Home',
  components: {
    Footer // 注册组件
  }
}
</script>

<style scoped>

</style>
