var fs = require('fs');
var express = require('express');
var app = express();
var buf = new Buffer(256);


app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(buf.toString(fs.readFileSync('index.html'), 'utf8'));
});

app.listen(process.env.PORT || 5000);

