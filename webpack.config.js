const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  watch: true,
  devServer: {
    inline: true
  },
  //Add sass-loader
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      // {
      //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      //   loader: "url-loader?limit=100000",
      //   options: {
      //     esModule: false
      //   }
      // },
      // {
      //   test: /\.(jpg|jpeg|gif|png|woff|woff2)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[path][name].[ext]",
      //         esModule: false
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("autoprefixer")];
              }
            }
          }
        ]
      }
    ]
  }
};
