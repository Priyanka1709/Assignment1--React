const webpack= require("webpack");
let config= require("./webpack.config");

config.devtool= 'source-map';

config.devServer= {
  port: 8080
};

config.watch= true;

module.exports= config;