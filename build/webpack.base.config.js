/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const jpackage = require('../package.json');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  // 加载器
  module: {
    // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
    rules: [{
      // https://vue-loader.vuejs.org/en/configurations/extract-css.html
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'vue-style-loader!css-loader',
          less: 'vue-style-loader!css-loader!sass-loader'
        },
        postLoaders: {
          html: 'babel-loader'
        }
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'autoprefixer-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader?sourceMap'
      ]
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192'
    },
    {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      main: path.resolve(__dirname, '../src'),
      'packages': path.resolve(__dirname, '../packages'),
      examples: path.resolve(__dirname, '../examples'),
      'element-ui': path.resolve(__dirname, '../'),
      'elvant': path.resolve(__dirname, '../')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${jpackage.version}'`
    })
  ]
};
