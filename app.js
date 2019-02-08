var express = require('express');  
var app = express();
var config = require('./config').config;
var fs = require('fs');
var chalk = require('chalk');

app.get('/getTCC', function (req, res) {
   fs.readFile( __dirname + "/" + "CCinfo.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/', function (req, res) {
   res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({value: 1}));
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
app.use(express.static(__dirname));
