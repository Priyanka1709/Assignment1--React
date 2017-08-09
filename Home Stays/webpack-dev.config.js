const webpack= require("webpack");
const {resolve}= require("path");
let config= require("./webpack.config");

config.devtool= 'source-map';

config.entry= ['webpack-hot-middleware/client?reload=true',
   		resolve(__dirname, "src/js/index")];

config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports= config;