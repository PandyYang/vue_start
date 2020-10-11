<template>
  <div id="app">
    <a href="#/">主页</a>
    <a href="#/user">用户模块</a>
    <a href="#/student">学生模块</a>
    <router-view/>
  </div>
<!--  <div id="list-demo" class="demo">-->
<!--    <button v-on:click="add">Add</button>-->
<!--    <button v-on:click="remove">Remove</button>-->
<!--    <transition-group name="list" tag="p">-->
<!--      <span v-for="item in items" v-bind:key="item" class="list-item">-->
<!--        {{item}}-->
<!--      </span>-->
<!--    </transition-group>-->
<!--  </div>-->
</template>

<script>
export default { // es6暴露当前组件对象
  name: 'App'
}

// new Vue({
//   el: '#list-demo',
//   data: {
//     items: [1,2,3,4,5,6,7,8,9],
//     nextNum: 10
//   },
//   methods: {
//     randomIndex: function () {
//       return Math.floor(Math.random() * this.items.length)
//     },
//     add: function () {
//       this.items.splice(this.randomIndex(), 0, this.nextNum++)
//     },
//     remove: function () {
//       this.items.splice(this.randomIndex(), 1)
//     }
//   }
// })
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
