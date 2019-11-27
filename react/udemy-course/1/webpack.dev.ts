import webpackMerge from "webpack-merge";
import webpackCommonConfig from "./webpack.common";
import webpack from "webpack";

const webpackDevConfig: webpack.Configuration = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    hot: true
  }
};

export default webpackMerge(webpackCommonConfig, webpackDevConfig);
