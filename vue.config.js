const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer: {
    //     host: '192.168.1.102', // ip
    //     port: 8081, // 设置端口号
    //     https: false, // https:{type:Boolean}
    //     open: false, //配置自动启动浏览器
    //     proxy:null  //设置代理
    // },
    lintOnSave: false,
    publicPath: '',
    runtimeCompiler: true,
    configureWebpack:{
      resolve:{
        alias:{
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'views':'@/views'
        }
      }
    }
})
