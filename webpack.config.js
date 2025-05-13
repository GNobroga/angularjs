const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './app/js/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,   
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,  
                use: 'html-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        static: './src',
        open: true,
        port: 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './app/index.html' }),
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '', noErrorOnMissing: true } ,
                { from: 'app/view', to: 'view', noErrorOnMissing: true },
            ]
        })
    ],
    mode: 'development'
};