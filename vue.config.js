const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  runtimeCompiler: true,
  assetsDir: 'renderer/public',
  publicPath: isProd ? './' : '/',
  productionSourceMap: !isProd,
  // webpack的相关配置
  configureWebpack: {
    entry: './renderer/src/main.ts'
  }
}
