import webpack = require("webpack");
import webpackMerge = require("webpack-merge");
import webpackCommonConfig from "./webpack.common";

const webpackDevConfiguration: webpack.Configuration = {
  mode: "development"
};

export default webpackMerge(webpackCommonConfig, webpackDevConfiguration);
