const webpack = require('webpack')

module.exports = {
    mode: 'development', // sets process.env.NODE_ENV to development
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Mythee-Dev')
        })
    ]
}