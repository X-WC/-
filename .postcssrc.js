// 配置 PostCSS配置文件
module.exports = {
  // 配置要使用的 PostCSS插件
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作用： 声称浏览器css样式规则前缀
    // vue-cli 已经配置过 这个插件
    'autoprefixer': { // autoprefixer 插件的配置
      // 配置要兼容到的环境信息
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    // 配置使用 postcss-pxtorem插件 
    'postcss-pxtorem': {
      // lib-flexible 的 REM 适配方案 ： 把一行分为10分 每份就是1/10
      // 所以 rootValue 应该设置为你的设计稿宽度的1/10
      // 设计稿宽度 750 75/10 = 75
      // 但是 vant 建议设置为37.5 因为vant是根据375写的
      // 所以我们设计稿中的尺寸必须/2
      // 将rootValue 写成函数 动态处理返回
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 75,
      // 配置要转换的 CSS属性
      // * 通配符选择器
      propList: ['*']
    }
  }
}
