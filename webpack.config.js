const webpack = require("webpack");
const path = require('path')
const htmlWebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


module.exports = {

    mode: 'production',
    entry: {
        filename: path.resolve(__dirname,'src/index.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },

    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },

    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(png|svg|jpg|webp|gif|jpeg)$/i,
                type: 'asset/resource'
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss", ".css"],
    },
    plugins: [ 
        new htmlWebpackplugin({
            title: 'BookShop',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3001,
        hot: true,
    },
    mode: production ? 'production' : 'development'
}