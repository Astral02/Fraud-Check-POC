var express = require('express');  
var app = express();
var config = require('./config').config;
const bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');

require('body-parser-xml')(bodyParser);

app.use(bodyParser.xml({
  limit: '1MB',   // Reject payload bigger than 1 MB
  xmlParseOptions: {
    normalize: true,     // Trim whitespace inside text nodes
    normalizeTags: true, // Transform tags to lowercase
    explicitArray: false // Only put nodes in array if >1
  }
}));

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/getTCC', function (req, res) {
   res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({cardNumber: 4111111111111111, name: "plain json"}));
})

app.get('/', function (req, res) {
   res.header('Content-Type', 'application/json');
      console.log(req);
   console.log("received the post request. Logging the request body :");
   console.log(req.body);
  res.send(JSON.stringify({CCNumber: 4111111111111111, name: "plain json"}));
})
app.post('/', function (req, res, body) {   
    //res.header('Content-Type', 'application/json');
    //console.dir(req.body, { depth: null });
   //console.log("received the post request. Logging the request body :");
   //console.log(req.body);
  //res.send(JSON.stringify({CCNumber: 4111111111111111, name: "plain json"}));
   res.set({'Content-Type': 'application/xml'});
    res.send("<AccountNumber><CCNumber>4111111111111111</AccountNumber>">        
        </CreditCard>`);
})
 

app.post('/postPCC', function (req, res, body) { 
     console.log(req);
 console.log("received the post request. Logging the request body :");
   console.log(req.body);

   // just call res.end(), or show as string on web
   res.send(req.body);

})

app.listen(config.port, function(){
    console.log(chalk.green('Server started at port' + config.port));
})


app.get('/getXML', (req, res) => {
    // Set Content-Type differently for this particular API
    res.set({'Content-Type': 'application/xml'});
    res.send("<AccountNumber><CCNumber>4111111111111111</AccountNumber>">        
        </CreditCard>`);
})
