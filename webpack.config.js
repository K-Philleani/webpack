const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build'),
    // assetModuleFilename: 'img/[name].[hash:8][ext]'
  },
  module: {
    rules: [
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
    new CleanWebpackPlugin()
  ]
}