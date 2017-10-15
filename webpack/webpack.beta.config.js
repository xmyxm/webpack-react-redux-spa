"use strict";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let config=require('./webpack.base.config.js');

config.plugins = config.plugins||[];
config.plugins.push(
	//css 文件抽离设置 如为dev 环境 disable必须为 true 才会把 css 打为内联样式来实现热刷新，若线上环境必须disable必须为false才会单独抽离出css文件
	new ExtractTextPlugin({ filename: 'css/[name].css', disable: true, allChunks: true })
);
//source-map的打包可以告诉我们错误源自源码的具体的位置,devtool来选定生成的source-map的详细程度
config.devtool = 'eval-source-map'; //推荐development
config.devtool = 'cheap-module-eval-source-map';
module.exports = config;


















