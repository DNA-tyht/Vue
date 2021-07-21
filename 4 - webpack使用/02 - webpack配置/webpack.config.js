const path = require("path");
module.exports = {
  //定义入口出口
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
}