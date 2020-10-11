<template>
  <div>
    <h2>编辑用户信息</h2>
    <form action="">
      用户名: <input v-model="user.name" type="text"></input><br>
      年龄: <input v-model="user.age" type="text"></input><br>
      生日: <input v-model="user.bir" type="text"></input><br>
      <input type="button" @click="editUserInfo" value="确定"></input>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
      }
    }
  },
  methods: {
    findOne() {
      this.$http.get("http://rap2api.taobao.org/app/mock/268057/user/findOne?id="+this.user.id).then((res) => {
        console.log(res.data)
        this.user = res.data.data
      })
    },
    editUserInfo() {
      this.$http.post("http://rap2api.taobao.org/app/mock/268057/user/update", this.user).then((res) => {
          if (res.data.success){
            this.$router.push('/user')
          }
      })
    }
  },
  created () {
    console.log("修改组件中获取的id:" + this.$route.query.id)
    this.user.id = this.$route.query.id
    this.findOne()
  }
}
</script>

<style scoped>

</style>
