const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
          },

        port: process.env.PORT 
    },
    module : {
        rules : [
            {
            test: /\.js/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.svg/,
            use: 'svg-url-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: 'file-loader'
        }]
    }
};

