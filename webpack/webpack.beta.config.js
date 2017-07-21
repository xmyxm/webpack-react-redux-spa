"use strict";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let config=require('./webpack.base.config.js');

config.plugins = config.plugins||[];
config.plugins.push(
	//css 文件抽离设置 如为dev 环境 disable必须为 true 才会把 css 打为内联样式来实现热刷新，若线上环境必须disable必须为false才会单独抽离出css文件
	new ExtractTextPlugin({ filename: 'css/[name].css', disable: true, allChunks: true })
);
module.exports = config;


















