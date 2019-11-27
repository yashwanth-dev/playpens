import webpackMerge from "webpack-merge";
import webpackCommonConfig from "./webpack.common";
import webpack from "webpack";

const webpackProdConfig: webpack.Configuration = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  }
};

export default webpackMerge(webpackCommonConfig, webpackProdConfig);
