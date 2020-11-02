<template>
<div>
  <p>
    main setting<br>
    <a href="#/page/profile">属性</a>&nbsp;
    <a href="#/page/email">邮箱</a>
  </p>
<!--下面如果有子路由 必须加入router-view-->
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>

<style scoped>

</style>
