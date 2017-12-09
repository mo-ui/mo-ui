const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: ['./src/main.js'],
    output: {
        filename: './bundle/[name].js',
        library: 'MoUi',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],
                enforce: 'pre'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } }
                ]
            }
        ]
    }
};
