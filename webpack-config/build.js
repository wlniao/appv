const base = require('./base')
const path = require('path')
const webpackMerge = require('webpack-merge')
const BabiliPlugin = require('babili-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = webpackMerge(base, {
  plugins:[
    new BabiliPlugin(),
    new htmlWebpackPlugin({'title':'wlnapp','filename':'index.html','template':'index.html'}),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../index.html'),
      to: path.resolve(__dirname, '../index.html')
    },{
      from: path.resolve(__dirname, '../node_modules/vue/dist/vue.min.js'),
      to: path.resolve(__dirname, '../static/js/vue.min.js')
    },{
      from: path.resolve(__dirname, '../node_modules/vuex/dist/vuex.min.js'),
      to: path.resolve(__dirname, '../static/js/vuex.min.js')
    },{
      from: path.resolve(__dirname, '../node_modules/vue-router/dist/vue-router.min.js'),
      to: path.resolve(__dirname, '../static/js/vue-router.min.js')
    },{
      from: path.resolve(__dirname, '../node_modules/vue-ydui/dist/ydui.flexible.js'),
      to: path.resolve(__dirname, '../static/vue-ydui/ydui.flexible.js')
    },{
      from: path.resolve(__dirname, '../node_modules/vue-ydui/dist/ydui.rem.js'),
      to: path.resolve(__dirname, '../static/vue-ydui/ydui.rem.js')
    },{
      from: path.resolve(__dirname, '../node_modules/vue-ydui/dist/ydui.rem.css'),
      to: path.resolve(__dirname, '../static/vue-ydui/ydui.rem.css')
    },{
      from: path.resolve(__dirname, '../static'),
      to: path.resolve(__dirname, '../dist/static'),
      ignore: ['.*']
    }])
  ]
});