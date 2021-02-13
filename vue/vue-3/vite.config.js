module.exports = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    compilerOptions: {
      isCustomElement: tag => {
        return /^x-/.test(tag)
      }
    }
  }
}
