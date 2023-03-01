// 打包后的js文件添加时间戳
const timeStamp = new Date().getTime()

module.exports = {
  configureWebpack: {
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000
    },
    output: {
      filename: `js/[name].${timeStamp}.js`,
      chunkFilename: `js/[name].${timeStamp}.js`
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '互邦模板'
        return args
      })
  },
  publicPath: '/template/',
  devServer: {
    proxy: {
      '/template_api': {
        target: 'http://192.168.0.23',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/template_api': '/'
        }
      }
    }
  },
  productionSourceMap: false
}
