const webpack= require("webpack");
let config= require("./webpack.config");    

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }
    )
)

module.exports= config;