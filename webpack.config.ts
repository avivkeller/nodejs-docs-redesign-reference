import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const config: Configuration = {
  entry: "./src/index.tsx",
  mode: "production",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            allowTsInNodeModules: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: "output.css" }),
    new HtmlWebpackPlugin({
      template: "src/template.html",
      inject: "body",
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

export default config;
