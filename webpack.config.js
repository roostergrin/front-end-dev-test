module.exports = {
	entry: './src/app.js',

	output: {
		filename: 'bundle.js'
	},

	watch: true,

	devServer: {
		inline: true
	},

	//Add sass-loader
	module: {
		loaders: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
			{
				test: /\.(scss|sass)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	}
}
