const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, arg) => {
  const isDevelopment = arg.mode === "development";
  return {
    name: "kattle",
    entry: "./src/main.tsx",
    output: {
      filename: "js/main-[hash:5].js",
      path: path.resolve(__dirname, "build"),
      publicPath: isDevelopment ? "/" : "",
      environment: {
        arrowFunction: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "img",
              },
            },
          ],
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // 模板文件路径
        filename: isDevelopment
          ? path.resolve(__dirname, "build/index.html")
          : path.resolve(__dirname, "build/index.[hash:5].html"),
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].chunk.css",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
      port: 7758,
      static: {
        directory: path.join(__dirname, "build"),
      },
      historyApiFallback: true,
    },
    devtool: isDevelopment ? "eval-source-map" : "eval",
  };
};
