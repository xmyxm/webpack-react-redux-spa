let config=require('./webpack.base.config.js');

config.mode = 'development'
//source-map的打包可以告诉我们错误源自源码的具体的位置,devtool来选定生成的source-map的详细程度
//config.devtool = 'eval-source-map'; //推荐development
//config.devtool = 'cheap-module-eval-source-map';
config.devtool = 'eval-source-map';
module.exports = config;