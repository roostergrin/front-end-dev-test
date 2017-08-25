const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		main: [
			path.resolve(__dirname, 'src/app.js'),
			path.resolve(__dirname, 'styles/main.css')
		]
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new ExtractTextPlugin({
			filename: 'styles/[name].[contenthash].css'
		})
	],

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
				test: /\.(css)$/,
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
