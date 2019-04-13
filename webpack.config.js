const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.tsx',
    output : {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions : ['.ts','.tsx','.js']
    },
    module : {
        rules : [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugin : [
        new HTMLPlugin({
            template: './src/index.html'
        })
    ]
}