var express = require('express');
var app = express();

app.get('/ligar', function(req, res){
  res.send("Lampada ligada");
});

app.get('/desligar', function(req, res){
  res.send("Lampada desligada");
});

app.listen(3000, function(){
  console.log("Funcionando na porta 3000");
});
