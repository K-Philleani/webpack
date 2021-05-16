const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin =  require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  target: "web",
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'img/[name].[hash:8][ext]'
  },
  devServer: {
    hot: true
  },  
  module: {
    rules: [
      // Vue处理
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      // js处理
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      // 处理ts
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // css处理
      {
        test: /\.css$/,
        use: [
          "style-loader", 
         {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
         }, 
          "postcss-loader"
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require('postcss-preset-env')
          //         'postcss-preset-env'
          //       ]
          //     }
          //   }
          // }
        ]
      },
      // less 处理
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          }, 
          'postcss-loader', 
          'less-loader'
        ]
      },
      // 文件资源处理(img)
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       name: "img/[name].[hash:8].[ext]",
        //       // outputPath: "img"
        //       limit: 100 * 1024
        //     }
        //   }
        // ]
      },
      // 字体文件
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][hash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      title: 'webpack',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [
              "**/index.html",
              "**/.DS_store"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}