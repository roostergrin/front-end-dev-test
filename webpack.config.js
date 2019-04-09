const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	watch: true,
	devServer: {
		inline: true
	},
	//Add sass-loader
	module: {
		rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: function () {
							return [ require('autoprefixer')]
						}
					}
				}]
			}
		]
	}
}
