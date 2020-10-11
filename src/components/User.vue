<template>
  <div>
    <h1>用户模块</h1>
    <table border="1">
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>生日</td>
        <td>操作</td>
      </tr>
      <tr v-for="user in users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.bir}}</td>
        <td><a href="">删除</a><a href="">修改</a></td>
      </tr>
    </table>
    <a href="#/user/add">添加</a>

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'User',
  data () {
    return {
      users: []
    }
  },
  methods: {

  },
  components: {
    Footer // 注册组件
  },
  created () {
    this.$http.get("http://rap2api.taobao.org/app/mock/268057/user/findAll?page=1&rows=4").then((res) => {
        this.users = res.data.results
    });
  }
}
</script>

<style scoped>

</style>
