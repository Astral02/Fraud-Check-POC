var express = require('express');  
var app = express();
var config = require('./config').config;
var chalk = require('chalk');

app.get('/getTCC', function (req, res) {
   fs.readFile( __dirname + "/" + "CCinfo.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "CCinfo.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/postPCC', function (req, res) {
   fs.readFile( __dirname + "/" + "CCinfo.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.listen(config.port, function(){
    console.log(chalk.green('Server started at port' + config.port));
})
