var express = require('express')
var app = express()
var path = require('path')
var port = 3000

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+"/views/index.html"));
})

app.use(express.static(__dirname+"/views"))

app.listen(port, function(){
    console.log("connected at port: "+port);
})