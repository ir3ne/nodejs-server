var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log('listening on port 3000!');
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static(__dirname + '/public'));

app.get('/users', function(req, res) {
  res.sendFile(__dirname + '/json/users.json');
});

