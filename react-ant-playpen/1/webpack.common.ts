import webpack = require("webpack");
import HtmlWebPackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const webpackCommonConfig: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.sass$/,
        use: ["css-loader", "style-loader", "sass-loader"]
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      title: "ANTD"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".sass"]
  }
};

export default webpackCommonConfig;
