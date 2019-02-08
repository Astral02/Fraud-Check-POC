var express = require('express');
var app = express();
var fs = require("fs");

app.get('/getTCC', function (req, res) {
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

var server = app.listen(86, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
