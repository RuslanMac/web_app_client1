module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
// vue.config.js
module.exports = {
  devServer: {
    proxy: 'https://damia.ru/api-zakupki/zakupka',
}
}
