const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      overlay: {
        warnings: false,
        errors: false
      },
      lintOnSave: false
  },
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/assets',
        'network':'@/assets',
        'views':'@/views',
      }
    }
  }
})
