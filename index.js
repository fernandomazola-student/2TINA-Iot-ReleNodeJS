var express = require('express');
var app = express();
var five = require("johnny-five");

//Instanciando um objeto board, que é um objeto que representa a placa (É um método instanciado da biblioteca johnnyfive)
var board = new five.Board();
var relay = null;

board.on("ready", function(){
  relay = new five.Relay(10);
});

app.get('/ligar', function(req, res){
  res.send("Lampada ligada");
  //Se tiver o relay disponivel chamamos o metodo on
  if(relay){
    relay.on();
  }
});

app.get('/desligar', function(req, res){
  res.send("Lampada desligada");
  if(relay){
    relay.off();
  }
});

app.listen(3000, function(){
  console.log("Funcionando na porta 3000");
});
