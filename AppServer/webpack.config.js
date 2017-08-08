const webpack= require("webpack");
const {resolve}= require("path");

module.exports= {
	context: resolve('src'),
	entry: {
		app: './js/index'
	},
	output: {
		path: resolve('dist'),
		filename: 'bundle.js',
		publicPath: "/dist/"
	},
    resolve: {
        extensions: ['.js', '.jsx'],
    },
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /(\.css)$/,
				loaders: ['style-loader', 'css-loader'],
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loaders: ['file-loader'],
			},
			{
				test: /\.(woff|woff2)$/,
				loaders: ['url-loader?prefix=font/&limit=5000'],
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loaders: ['url-loader?limit=10000&mimetype=application/octet-stream'],
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loaders: ['url-loader?limit=10000&mimetype=image/svg+xml'],
			}
		]
	}
}