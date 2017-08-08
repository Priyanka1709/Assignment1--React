const webpack= require("webpack");
let config= require("./webpack.config");

config.devtool= 'source-map';

config.plugins= [
    new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }
    )
]

module.exports= config;