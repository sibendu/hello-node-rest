var express = require('express');
var app = express();
var fs = require("fs");

app.get('/users', function (req, res) {
   fs.readFile( "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/users/:id', function (req, res) {
   // First read existing users.
   fs.readFile("users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.post('/users', function (req, res) {
   // First read existing users.
   fs.readFile("users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

const PORT = 5000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
