const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');//抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
const webpack = require('webpack');
const packageFilePath = path.join(__dirname, "../dist");

module.exports = {
	entry:{
		index:['./src/app.jsx']
		,common:['react','redux']
	},
	output:{
		path: packageFilePath
		//,filename:'js/[name]-[chunkhash].js'//dev 环境不能使用这个配置，因为您不应该使用纯或散列进行开发。这将导致许多其他问题，比如内存泄漏，因为dev服务器不知道什么时候清理旧文件。
		,filename:'js/[name].js'
		,chunkFilename: 'js/[name]-[id].js'
		,publicPath:'/'//'http://qqweb.top/m/' //配置文件公共路径，上线的时候直接替换为线上域名
		,crossOriginLoading: 'anonymous' //script 标签加上跨域错误捕获权限
	},
	module:{
		rules:[
			{
	            test: /\.(es6|jsx|js)$/,
	            loader: 'babel-loader?cacheDirectory',//babel-loader缓存机制加参数 cacheDirectory,webpack构建将尝试从缓存中读取，以避免在每次运行时，需要运行 Babel 重新编译过程可能带来的高昂的开销
	            exclude: /node_modules/,
	            query: {
	                presets: ['react', 'stage-0', 'es2015', 'stage-3'],
	                plugins: ["transform-object-rest-spread","transform-decorators-legacy","transform-class-properties"]
		        }
			},
			{
		        test: /\.less$/,
		        //设置 options: { minimize: true }  会压缩样式,style-loader加载器就是将CSS以内联方式插入到页面文档
		        use: ExtractTextPlugin.extract({
		        	use:[{ loader: 'css-loader', options: { minimize: true } },'postcss-loader','less-loader']
		        	,fallback: 'style-loader'})
		        //['style-loader',{ loader: 'css-loader', options: { minimize: true } },'postcss-loader','less-loader']
		    },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use:[{ loader: 'css-loader', options: { minimize: true } },'postcss-loader','sass-loader']
					,fallback: 'style-loader'}) 
				//['style-loader', { loader: 'css-loader', options: { minimize: true } },'postcss-loader','sass-loader']
			},
	        {
                test: /\.(png|jpg|jpeg|gif)$/,
                //url-loader是对file-loader的上层封装，一般限制小图片转 base64 可以用 url-loader
                use: [{loader: 'url-loader', options: {limit: 500, name: '[name]-[hash].[ext]'}}]
                // 内联的base64的图片地址, 图片要小于5k, 直接的url的地址则不解析
	        },
	        {
	        	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            	use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/vnd.ms-fontobject'}}]
	        },
	        {
	        	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            	use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/octet-stream'}}]
	        },
	        {
	        	test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            	use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/font-woff'}}]
	        },
	        {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            	use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'image/svg+xml'}}]
	        }
		]
	},
	plugins:[
		new webpack.BannerPlugin('晨曦沐枫作品，欢迎学习交流'),//打包后代码版权申明插件
		new CleanPlugin(['dist', 'build']),//每次打包清理上次的打包文件
		new webpack.optimize.CommonsChunkPlugin({
				// manifest文件用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑。
				// 当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，
				// runtime就会根据manifest文件来处理和加载模块。利用manifest就知道从哪里去获取模块代码。
				names: ["common","manifest"],
				//filename: "js/[name]-[chunkhash:8].js",
				minChunks: Infinity//当项目中引用次数超过2次的包自动打入commons.js中,可自行根据需要进行调整优化
			}),
		new HtmlWebpackPlugin({
				template:'./src/html/index.html'
				,filename:'index.html'//可以使用hash命名
				,title:'前端栈'
				,inject:'body'//脚本包含到body 也可以写到head里面
				,chunks:['index','common','manifest']//指定当前模板需要打入哪些js模块
				,minify:{//启用代码代码压缩
					removeComments:true,//移除注释
					collapseWhitespace:true//移除空格
				}
			})
	],
    resolve:{
        //别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
        alias: {
             //绝对路径;特别注意这里定义的路径和依赖的包名不能重名
             actionpath: path.resolve(__dirname,'../src/redux/action'), 
             utilspath: path.resolve(__dirname,'../src/utils'),
             componentpath: path.resolve(__dirname,'../src/component'),
             stylepath: path.resolve(__dirname,'../src/style'),
             reduxpath: path.resolve(__dirname,'../src/redux')
        }
    },
	devServer: {
		contentBase: packageFilePath,
		watchContentBase:true,//告诉服务器监视那些通过 devServer.contentBase 选项提供的文件。文件改动将触发整个页面重新加载。默认被禁用。
		compress: true,//一切服务都启用gzip 压缩：
		inline: true,//应用程序启用内联模式,默认内联模式,当源文件改变时会自动刷新页面
		hot: true,//启用 webpack 的模块热替换特性
		host:'localhost',//指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定为ip
		stats:{colors: true},// 用颜色标识
		port: 9000,
		historyApiFallback:{//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
			index:'dist/index.html',
			rewrites: [
			  { from: /^\/admin/, to: 'dist/admin.html' }
			]
	    }
	}
}



//img处理
//url-loader 可以根据自定义文件大小或者转化为 base64 格式的 dataUrl, 或者单独作为文件, 也可以自定义对应的hash 文件名
//file-loader 默认情况下会根据图片生成对应的 MD5hash 的文件格式
//image-webpack-loader 提供压缩图片的功能


//css处理
//style-loader自动将css代码放到生成的style标签中插入到head标签里
//use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
//fallback:编译后用什么loader来提取css文件
//使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀, postcss-loader 需要结合加前缀工具 autoprefixer ,
//在webpack配置文件中添加postcss-loader，在根目录新建postcss.config.js 指明 添加前缀的插件及其插件的配置

//{
//     loader: "css-loader",
//     options: {
//         modules: true
//     }
// }
//CSS modules 的技术就意在把JS的模块化思想带入CSS中来,这样做只对当前组件有效，不必担心在不同的模块中使用相同的类名造成冲突
















