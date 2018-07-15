module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['ie>=8','>1% in CN'],
			remove: false // 必须配置，不然多行点点点的前缀样式被移除了
		})
	]
}