<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 根据name在调试工具中找到相应的组件
  // 组件缓存中需要组件name
  name: 'App'
}
</script>

<style lang="less" scoped>
</style>
