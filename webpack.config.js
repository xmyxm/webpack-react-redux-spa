const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const packageFilePath = path.join(__dirname, "dist");

module.exports = {
	entry:{
		index:['./src/index.jsx']
		//,common:['open']
	},
	output:{
		path: packageFilePath
		//,filename:'js/[name]-[chunkhash].js'//dev 环境不能使用这个配置，因为您不应该使用纯或散列进行开发。这将导致许多其他问题，比如内存泄漏，因为dev服务器不知道什么时候清理旧文件。
		,filename:'js/[name].js'
		//,publishPath:'http://cdn.com' //配置文件公共路径，上线的时候直接替换为线上域名
	},
	module:{
		rules:[
			{
				// test:/\.(jsx|js)$/,
				// exclude: [path.resolve(__dirname, '..', 'node_modules')],
				// loader: "babel-loader",
				// options: {
		  //         presets: ['babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-stage-3']
		  //       }
				



		// use: {
  //              loader: 'babel-loader',
  //              options: {
  //                  "presets": [
  //                      "react",
  //                      "stage-0",
  //                      ["es2015", { "modules": false }]
  //                  ],
  //                  // "plugins": [
  //                  //     "transform-object-rest-spread",
  //                  //     "transform-decorators-legacy",
  //                  //     "transform-class-properties"
  //                  // ]
  //              }
  //          }





            test: /\.(es6|jsx|js)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
	                presets: ['react', 'stage-0', 'es2015', 'stage-3'],
	                plugins: ["transform-object-rest-spread","transform-decorators-legacy","transform-class-properties"]
	            }
			},
			// { 	
			// 	test: /\.css$/, 
			// 	use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] }) 
			// },
			{
		        test: /\.less$/,
		        use: ExtractTextPlugin.extract({use:[ 'css-loader','less-loader'],fallback: 'style-loader'})
		    },
	        {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{loader: 'url-loader', options: {limit: 500, name: '[name]-[hash].[ext]'}}]
                // 内联的base64的图片地址, 图片要小于5k, 直接的url的地址则不解析
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
	// postcss: function() {
 //        //处理css兼容性代码，无须再写-webkit之类的浏览器前缀
 //        return [
 //            require('postcss-initial')({
 //                reset: 'all' // reset only inherited rules
 //            }),
 //            require('autoprefixer')({
 //                browsers: ['> 5%']
 //            })
 //        ];
 //    },
	plugins:[
		new CleanPlugin(['dist', 'build']),//每次打包清理上次的打包文件
		// new webpack.optimize.CommonsChunkPlugin({
		//           name: "common",
		//           filename: "common.js",
		//           minChunks: Infinity//当项目中引用次数超过2次的包自动打入commons.js中,可自行根据需要进行调整优化
		//       }),
		new HtmlWebpackPlugin({
				template:'./src/html/index.html'
				,filename:'index.html'//可以使用hash命名
				,title:'大众点评 推荐菜详情'
				,inject:'body'//脚本包含到body 也可以写到head里面
				,chunks:['index']//指定当前模板需要打入哪些js模块
				,minify:{//启用代码代码压缩
					removeComments:true,//移除注释
					collapseWhitespace:true//移除空格
				}
			}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function () {
					return [precss, autoprefixer];
				},
				devServer: {
					contentBase: packageFilePath, //本地服务器所加载的页面所在的目录
					historyApiFallback: true, //不跳转
					compress: true,//一切服务都启用gzip 压缩：
					inline: true,//应用程序启用内联模式,默认内联模式
					hot: true,//启用 webpack 的模块热替换特性
					host:'localhost',//指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定为ip
					stats:{colors: true},// 用颜色标识
					port: 9000
				}
			}
		})
	],
	devServer: {
		contentBase: packageFilePath,
		watchContentBase:true,//告诉服务器监视那些通过 devServer.contentBase 选项提供的文件。文件改动将触发整个页面重新加载。默认被禁用。
		compress: true,//一切服务都启用gzip 压缩：
		inline: true,//应用程序启用内联模式,默认内联模式
		hot: true,//启用 webpack 的模块热替换特性
		host:'localhost',//指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定为ip
		stats:{colors: true},// 用颜色标识
		port: 9000,
		historyApiFallback:{
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























