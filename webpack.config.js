const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/", 
    assetModuleFilename: "assets/[name][ext]", 
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html", "./src/media_files/**/*"], 
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/",
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      publicPath: "/",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]", 
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: true, 
            },
          },
        ],
      },
    ],
  },
};