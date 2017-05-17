var webpack = require('webpack');
var path = require("path")
var fs = require('fs');

module.exports = {
    //context: path.resolve('./webpack/'),
    //entry: "./entry.js",
    //entry: "./main.js",
    entry: "./webpack/index/index.js",
    //entry:{
    //    common: ['jquery', 'react', 'react-dom',
            //'echarts', 'echarts/chart/bar', 'echarts/chart/pie', 'echarts/component/title', 'echarts/component/tooltip', 'echarts/component/grid', 'echarts/component/legend'
        //]
    //},
    output: {
        path: __dirname,
        filename: "bundle.js"
        //path: path.resolve('./dist'),
        //filename: '[name]/index_[chunkhash:4].js'
    },
	devServer: { inline: true, port: 7777 },
    module: {
        loaders: [
                    {
                        test: /\.jsx?$/i,
                        //include:path.resolve('./webpack'),
                        exclude:/node_modules/,
                        loader: 'babel',
                        query: {
                            presets:['es2015','react']
                        }
                    },   
                    {
                        test: /\.css$/,
                        loader: "style!css"
                    }
                ]

        //loaders: [{ test: /\.css$/, loader: "style!css" }]
    },
    resolve: {
        modulesDirectories: ['./node_modules', './components', '.'],
    }
};