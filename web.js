var express = require('express');
var fs = require('fs');
var buff = new Buffer(fs.readFileSync('index.html'));
var app = express();
app.use(express.logger());
var htmlcontent = buff.toString();

app.get('/', function(request, response) {
  response.send(htmlcontent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


 
