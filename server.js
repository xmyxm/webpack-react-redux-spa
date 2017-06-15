const WebpackDevServer = require("webpack-dev-server");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const open = require("open");
const config = require("./webpack.config.js");
const port =  config.devServer.port;
const host = config.devServer.host || '127.0.0.1';
const ip = '0.0.0.0';

for (let key in config.entry) {
    let ar = config.entry[key];
    if (key != "common") {
        ar.unshift("webpack-dev-server/client?http://"+ host +":"+ port +"/", "webpack/hot/dev-server");
    }
}

//开发环境热更新配置
config.plugins.push(new webpack.HotModuleReplacementPlugin());
//css 文件抽离设置 如为dev 环境 disable必须为 true 才会把 css 打为内联样式来实现热刷新，若线上环境必须disable必须为false才会单独抽离出css文件
config.plugins.push(new ExtractTextPlugin({ filename: '[name].css', disable: true, allChunks: true }));


const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.listen(port, host, (err)=>{
	if(err){
		console.log('启动出错：' + err);
	}
	open('http://' + host + ':' + port + '/index.html');
});





