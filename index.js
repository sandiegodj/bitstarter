var fs = require("fs");
var express = require('express');
var app = express();
var buf = new Buffer(25);
var file = fs.readFileSync('index.html');
var out = buf.toString(file);

app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(out)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
