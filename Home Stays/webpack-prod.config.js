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
config.plugins.push(
    new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }
    )
)

module.exports= config;