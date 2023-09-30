const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // webpack will check file(s) with .tsx if not there then it will resolve with .ts and so on...
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [ // use babel-loader for transpiling and bundling files with extns .ts, .js, .tsx, .jsx
                    {
                        loader: 'babel-loader',
                    },
                ],
            }
        ],
    },
    output: { // bundled file should be placed inside the below directory
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    mode: 'development', // sets process.env.node_env to development
    plugins: [
        new HtmlWebpackPlugin({ // injects bundle.js file in to index.html file and places the html file in the build folder automatically
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
    stats: 'errors-only',
}

// We dont need to specify the <script> tag in index.html file, the HtmlWebpackPlugin will take care