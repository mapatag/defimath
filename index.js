var express = require("express");
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io').listen(server); 
var cors = require('cors');
const port = 8888;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/ethmath.html');
});

server.listen(process.env.PORT || port, () =>  console.log(`Listening on ${server.address().port}`) );
