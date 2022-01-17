var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(request, response){
  var pathName = request.url
  var fileName = "todo.json"
  fs.readFile(fileName, callback)
  function callback(err,data){
    if(err){
      console.log(err)
      response.writeHead(400, ({'Content-type':'application/json'}));
      response.write("<!DOCTYPE><html><body><div>Page Not Found</div></body></html>")
    }
    else{
      response.writeHead(200, ({'Content-type':'text/json'}));
      response.write(data.toString());
    }
  response.end();
  }
}).listen(3000)
console.log("Running")