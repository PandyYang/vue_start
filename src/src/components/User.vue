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
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.bir}}</td>
        <td><a href="javascript:;" @click="delRow(user.id)">删除</a><a :href="'#/user/edit?id='+user.id">修改</a></td>
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
    findAll () {
      this.$http.get('http://rap2api.taobao.org/app/mock/268057/user/findAll?page=1&rows=4').then((res) => {
        this.users = res.data.results
      })
    },
    delRow (id) {
      this.$http.get('http://rap2api.taobao.org/app/mock/268057/user/delete?id=' + id).then((res) => {
        if (res.data.success) {
          this.$message.success({
            message: '删除成功！',
            duration: 2000
          })
          this.findAll()
        }
      })
    }
  },
  components: {
    Footer // 注册组件
  },
  created () {
    this.findAll()
  },
  watch: { // 监听
    $route: {
      handler: function (val, oldVal) {
        if (val.path === '/user') {
          this.findAll()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
