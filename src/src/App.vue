<template>
  <div id="app" style="font-size: 200%">
    <router-link to="/">主页</router-link>&nbsp;
    <a href="#/user">用户模块</a>&nbsp;
    <a href="#/student">学生模块</a>&nbsp;
    <a href="#/test">组件与过滤器</a>&nbsp;
    <a href="#/page">设置</a>
    <router-view/>
    <!--    <NavMenu></NavMenu>-->
<!--    <Header></Header>-->
<!--    <el-header class="header">-->
<!--        <Header></Header>-->
<!--      </el-header>-->

  </div>
</template>

<script>
// import NavMenu from '@/components/element/NavMenu'
// import Header from '@/components/element/Header'
import store from './store'
// const route = new VueRouter({
//   routes: [
//     {
//       path: '/settings',
//       redirect: 'preferences'
//     }
//   ]
// })

export default {
  name: 'app',
  store
  // components: { NavMenu, Header }
}

</script>

<style>
  .aa {
    background: bisque;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translate(30px);
  }
</style>
