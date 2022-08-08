const express = require('express');
const data = express();

data.use(express.static(__dirname + '/store'));


data.get('/home', function(req, res){
    res.sendFile(__dirname + "/html/home.html");
});

data.get('/menu', function(req, res){
    res.sendFile(__dirname + "/html/menu.html");
});


data.get('/contact', function(req, res){
    res.sendFile(__dirname + "/html/contact.html");
});

data.get('/portfoli', function(req, res){
    res.sendFile(__dirname + "/html/portfoli.html");
});

const port = 3006;
data.listen(port, function(){
    console.log("Servar is start in PORT:", port);
});