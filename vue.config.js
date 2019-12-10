module.exports = {
	chainWebpack: config => {
		config.module.rule('js').test(/\.m?jsx?$/).use('babel-loader').loader('babel-loader').tap(options => {
			return Object.assign({}, options, {
				presets: ['@babel/preset-env']
			})
		}).end()
	}
}
