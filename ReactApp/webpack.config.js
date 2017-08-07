const webpack= require("webpack");
const {resolve}= require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports= {
	context: resolve('src'),
	entry: {
		app: './js/index.js'
	},
	output: {
		path: resolve('dist'),
		filename: '[name].js',
		publicPath: "/dist/"
	},
	plugins: [
    	new ExtractTextPlugin({
	      filename: "css/styles.css"
	    })
  	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loaders: ExtractTextPlugin.extract({
		          use: "css-loader!less-loader"
		        })
			}
		]
	}
}