const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:  ["./src/index.js", './src/assets/sass/main.scss', './src/assets/sass/ie8.scss', './src/assets/sass/ie9.scss'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },

      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'images/[name].[ext]'
      //       }  
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
