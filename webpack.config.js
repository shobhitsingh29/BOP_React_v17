
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[name]_[local]_[hash:base64]",
            sourceMap: true,
            minimize: true
          },
        }, 'sass-loader'],
        include: [/src\/(.*\/)?@(.*)?\/.*/]
      },
      {
        test: /\.scss$/,
        exclude: [/src\/styles/, /src\/(.*\/)?@(.*)?\/.*/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],

  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
]
};