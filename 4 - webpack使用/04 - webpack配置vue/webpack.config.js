const path = require("path");
module.exports = {
  //定义入口出口
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader" ,"css-loader"]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //加载的图片小于limit时图片编译为base64格式
              //大于limit时会使用file-loader
              limit: 8196,
              name: "img/[name].[hash].[ext]",
            },
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          },
        }
      }
    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm"
    }
  }
};