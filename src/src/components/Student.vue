<template>
  <div>
    <h1>学生模块</h1>
    <table border="1">
      <tr>
        <td>id</td>
        <td>name</td>
        <td>age</td>
        <td>操作</td>
      </tr>
      <tr v-for="user in users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td><a href="">删除</a><a href="">修改</a></td>
      </tr>
    </table>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Student',
  data () {
    return {
      users: [
        { id: 1, name: 'Pandy', age: 18 },
        { id: 1, name: '云酱', age: 17 },
        { id: 1, name: 'Pandy', age: 18 },
        { id: 1, name: '云酱', age: 17 }
      ]
    }
  },
  methods: {

  },
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>
