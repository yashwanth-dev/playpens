import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const webpackCommonConfig = {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "qapita-wireframes",
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          compilerOptions: {
            module: "esNext"
          }
        }
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".sass"]
  }
};

export default webpackCommonConfig;
