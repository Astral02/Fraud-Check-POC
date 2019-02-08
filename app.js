var express = require('express');  
var app = express();
var config = require('./config').config;
const bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getTCC', function (req, res) {
   res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({cardNumber: 4111111111111111, name: "plain json"}));
})

app.get('/', function (req, res) {
   res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({cardNumber: 4111111111111111, name: "plain json"}));
})

app.post('/postPCC', function (req, res) { 
 console.log("received the post request");

})

app.listen(config.port, function(){
    console.log(chalk.green('Server started at port' + config.port));
})


app.get('/getXML', (req, res) => {
    // Set Content-Type differently for this particular API
    res.set({'Content-Type': 'application/xml'});
    res.send(`<CreditCard Number="4111111111111111" Name="Plain XML Response ">        
        </CreditCard>`);
})
