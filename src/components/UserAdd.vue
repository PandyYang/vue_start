<template>
  <div>
    <form action="">
      用户名: <input v-model="user.name" type="text"><br>
      年龄: <input v-model="user.age" type="text"><br>
      生日: <input v-model="user.bir" type="text"><br>
      <input type="button" @click="saveUserInfo" value="添加用户信息">
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
  data() {
    return{
      user:{}
    }
  },
  methods: {
    saveUserInfo() {
      console.log(this.user)
      //发送axios请求
      this.$http.post("url", this.user).then(res => {

      })
    }
  }
}
</script>

<style scoped>

</style>
