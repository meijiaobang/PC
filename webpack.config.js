const path = require('path')
const webpack = require('webpack')
//自动删除残留的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin')
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './src/'),// 表示从哪个路径启动
    host: 'localhost',
    port: '8888',
    open: true,
    overlay: true,
  },
  // 合拼
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'style',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  mode: 'production', //'development''production'
  entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
    // revolutionmin: path.resolve(__dirname, './src/js/revolutionmin.js'),
    // banner:path.resolve(__dirname, './src/js/banner.js'),
    // Information: path.resolve(__dirname, './src/js/Information.js'),
    // Product: path.resolve(__dirname, './src/js/Product.js')
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|gif|gsp|svg)$/i,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: './img',
      //       limit: 2048
      //     }
      //   }
      // },
      {//1.1css中引入图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: '/[name].[ext]',
              outputPath: './images'
            },
          }
        ]
      },
      {//1.2html中引入图片
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import')(),
                require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] })// 自动添加css前缀
              ],
            }
          }
        ]
      },
    ]
  },

  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js'
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   Popper: ['popper.js', 'default'],
    // }),
    //打包之前先删除之前的文件
    new CleanWebpackPlugin(), //小括号内不用写
    new webpack.HotModuleReplacementPlugin(),//模块刷新
    new MiniCssPlugin({
      filename: './[name].css'//不加文件夹,否侧背景图打包路径错误
    }),
    // 主页
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/index.html',
      minify: {
        html5: true,
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './index.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['index'],//每个html只引入对应的js和css
    }),
    // 关于
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/About.html',
      minify: {
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './About.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['About'],//每个html只引入对应的js和css
    }),
    // 资讯
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/Information.html',
      minify: {
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './Information.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['Information'],//每个html只引入对应的js和css
    }),
    // 中心
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/Product.html',
      minify: {
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './Product.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['Product'],//每个html只引入对应的js和css
    }),
    // 案例
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/Exhibit.html',
      minify: {
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './Exhibit.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['Product'],//每个html只引入对应的js和css
    }),
    // 人才
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/Talent.html',
      minify: {
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './Talent.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['Product'],//每个html只引入对应的js和css
    }),
    // 我们
    new HtmlWebpackPlugin({
      favicon: './src/favicon/XY.png',   //生成html文件的favicon的路径
      template: './src/Contact.html',
      minify: {
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true,//清除注释
        collapseWhitespace: true,//删除空格、换行
      },
      filename: './Contact.html',     //生成html文件的文件名，默认是index.html
      inject: true,
      hash: true,//避免缓存js
      // chunks: ['Product'],//每个html只引入对应的js和css
    }),
    // 去重
    new optimizeCss({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),//引入cssnano配置压缩选项
      // cssProcessorOptions: cssnanoOptions,
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeUnicode: false
        }]
      },
      canPrint: true //是否将插件信息打印到控制台
    }),
  ],
}