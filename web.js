var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
		var currentTime = new Date();
        var hours = currentTime.getHours();
  var data = new Buffer(fs.readFileSync('index.html'));		
  response.send(hours);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
