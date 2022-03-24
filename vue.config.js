const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer: {
    //     overlay: {
    //       warnings: false,
    //       errors: false
    //     },
    //     overlay:'./public'
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
