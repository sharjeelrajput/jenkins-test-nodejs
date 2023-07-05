var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.json({ user : "name", author : "name"});
})
app.get('/test', function(req, res){
  res.json({ user : "name", author : "name"});
})

app.listen(4002, function(){
  console.log("Server Started .....");
})