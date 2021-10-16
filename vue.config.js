const {configureWebpack} = require("../mall/vue.config");
const webpack = require('webpack')
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
    },
    plugins:[
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}