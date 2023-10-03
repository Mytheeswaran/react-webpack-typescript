const webpack = require('webpack')

module.exports = {
  mode: 'development', // sets process.env.NODE_ENV to development
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true, // similar to cmd in webpack cli: webpack serve --config webpack/webpack.config.js --env env=dev --open
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Mythee-Dev'),
    }),
  ],
}
