const {configureWebpack} = require("../mall/vue.config");
module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'network' : '@/network',
        'views' : '@/views'
      }
    }
  }
}