var express = require('express');
var path= require('path');
var webpack= require('webpack');
var open= require('open');

var cards= require('./data/cards');

const isDevelopment = process.env.NODE_ENV !== "production";

const app = express();
const port = 3000;

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
    else{
        console.log("Express server started on port: ",port);
        open(`http://localhost:${port}`);
    }
    
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/details/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/search/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cards', function(req, res) {
    res.send(cards);
});

app.get('/cards/:id', function(req, res) {
    res.send(req.params.id);
});

app.get('/images/:path', function(req, res) {
    res.sendFile(path.join(__dirname, 'assets/images', req.params.path));
});

app.post('/cards/:id', function(req, res) {
  // res.send(req.params.id);
});

app.use(express.static(path.join(__dirname, 'dist')));
if (isDevelopment) {  
    var devConfig= require('./webpack-dev.config');

    const compiler = webpack(devConfig);

    app.use(require('webpack-dev-middleware')(compiler));

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log
    }));
}

module.exports = app;
