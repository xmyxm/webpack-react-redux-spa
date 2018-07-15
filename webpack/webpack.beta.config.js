const webpack = require('webpack');
let config=require('./webpack.base.config.js');

config.plugins = config.plugins||[];
config.mode = 'development'
config.plugins.push(
	//允许你创建一个在编译时可以配置的全局常量，只能在被打包的文件中读取到这个全局变量
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"development"'
		}
	})
);
//source-map的打包可以告诉我们错误源自源码的具体的位置,devtool来选定生成的source-map的详细程度
//config.devtool = 'eval-source-map'; //推荐development
//config.devtool = 'cheap-module-eval-source-map';
config.devtool = 'eval-source-map';
module.exports = config;