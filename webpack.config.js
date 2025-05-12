const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/script.js',
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
            }
        ]
    },
    devServer: {
        static: './src',
        open: true,
        port: 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    mode: 'development'
};