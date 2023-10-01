const webpack = require('webpack');

module.exports = {
    mode: 'production', // sets process.env.NODE_ENV to production
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Mythee-Prod')
        })
    ]
}