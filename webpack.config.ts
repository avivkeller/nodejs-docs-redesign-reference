import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Configuration = {
  entry: "./src/entrypoint.tsx",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /.tsx?$/,
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
  plugins: [new MiniCssExtractPlugin({ filename: "output.css" })],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;
