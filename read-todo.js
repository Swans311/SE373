var http = require('http')
var url = require('url')
var fs = require('fs')
const { Console } = require('console')

http.createServer(function(request, response){
  var pathName = request.url
  var fileName = "read-todo.html"
  fs.readFile(fileName, callback)
  function callback(err,data){
    if(err){
      console.log(err)
      response.writeHead(400, ({'Content-type':'text/html'}));
      response.write("<!DOCTYPE><html><body><div>Page Not Found</div></body></html>")
    }
    else{
      response.writeHead(200, ({'Content-type':'text/html'}));
      response.write(data.toString());
    }
  response.end();
  }
}).listen(3000)
console.log("Running")