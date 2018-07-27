var express = require('express');
var path = require('path');
var app = express();

const _port = 1337;

app.use(express.static(__dirname + '/src/assets'));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, './src') });
});

app.listen(_port, function(){
    console.log('listening at port: ' + _port); 
});