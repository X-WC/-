<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view />
    <h1>123</h1>
    <div>
      <i class="iconfont icon-dianzan">123</i>
    </div>
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
