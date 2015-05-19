var fs = require('fs');
var express = require('express');
var app = express();
var htmlfile = "index.html";


app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log("Listening on " + port);
});

