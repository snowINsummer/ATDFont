var webpack = require('webpack');
var path = require("path")
var fs = require('fs');

var build = process.argv
    .filter(o => o.indexOf("--build=") == 0 || o.indexOf('-b=') == 0)
    .map(o => build = o.split("=")[1] + "/")[0] || '';

var option = {
    context: path.resolve('./webpack/'),
    //entry: "./entry.js",
    //entry: "./main.js",
    entry: {
        common: ['babel-polyfill']
    },
    // entry: "./webpack/index/index.js",
    // entry:{
    //    common: ['jquery', 'react', 'react-dom',
    //         'echarts', 'echarts/chart/bar', 'echarts/chart/pie', 'echarts/component/title', 'echarts/component/tooltip', 'echarts/component/grid', 'echarts/component/legend'
    //     ]
    // },
    output: {
        // path: __dirname,
        // filename: "bundle.js"
        // filename: '[name]/index.js'
        path: path.resolve('./dist'),
        filename: '[name]/index.js'
        
        //filename: '[name]/index_[chunkhash:4].js'
    },
	devServer: { 
        publicPath: '/tyrant/',
        hot: false,
        inline: true,
        progress: false,
        port: 8888 ,
        devtool : "eval"
    },
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
                    },
                    {
                           test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                           loader : 'url?prefix=font/&limit=10000'
                    },
                    {
                        test: /server_conf\.js$/i,
                        loader: 'exports?TrantServerConf'
                    }
                ]

        //loaders: [{ test: /\.css$/, loader: "style!css" }]
    },
    plugins: [
        //把共享组件提取出来放common.js里面
        // new webpack.optimize.CommonsChunkPlugin({name: 'common',minChunks: 3,filename: 'common.js'})
    ],
    resolve: {
        modulesDirectories: ['./../node_modules', './components', '.'],
        alias: {
            //根据不同的build，使用不同的服务api配置文件
            server: 'src/common/js/conf/' + build + 'server_conf.js',
        }
    }
};


var html = require('html-webpack-plugin');

//读取源码目录，自动把目录下的项目加入到config里
fs.readdirSync(option.context)
    .filter(entry => fs.statSync(path.join(option.context, entry)).isDirectory())
    .filter(entry => ['.svn', 'components','common'].indexOf(entry) < 0 )
    .forEach(entry => {
        option.entry[entry] = ['./' + entry]; 

        option.plugins.push(new html({
            template: entry + '/index.html', //把 webpack/[entry]/index.html 
            filename: entry + '.html', //copy 到 dist/[entry].html
            // favicon: '../src/common/img/envision.ico', //将ico copy到根目录下
            chunks: ['common',entry] //并且自动加入common.js和[entry].js的引用
        }));
    })

module.exports = option;