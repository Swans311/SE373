var http = require('http')
var url = require('url')
var fs = require('fs');
const { Console } = require('console');

http.createServer(function(request, response){
  response.writeHead(200, ({'Content-type':'text/plain'}));
  response.end("Hello World");
  var pathName = request.url
  switch(pathName){
    case '/index':
      var fileName = "index.html"
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
      response.end('index');
      }
      break;
      case '/todo':
        console.log("TODO achieved")
        //var pathName = request.url
        var fileName = "/todo.json"
        fs.readFile(fileName, callback)
        //console.log("reading file")
        function callback(err,data){
          if(err){
            console.log(err)
            response.writeHead(400, ({'Content-type':'application/json'}));
            response.write("<!DOCTYPE><html><body><div>Page Not Found</div></body></html>")
            //console.log("random issue")
          }
          else{
            response.writeHead(200, ({'Content-type':'text/json'}));
            response.write(data.toString());
            //console.log("The page is being written")
          }
        response.end();
        }
        //console.log("no longer reading file")

      case '/fake-page':
        //var pathName = request.url
        var fileName = "index.html"
        fs.readFile(fileName, callback)
        function callback(err,data){
          if(err){
            console.log(err)
            response.writeHead(400, ({'Content-type':'text/html'}));
            response.write("<!DOCTYPE><html><body><div>Page Not Found</div></body></html>")
          }
          else{
              response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index.html' });
              response.writeHead(200, ({'Content-type':'text/html'}));
              response.write(data.toString());
          }
        response.end();
        }
        break;
      case '/read-todo':
        //var pathName = request.url
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
        case '/favicon.ico':
          console.log("We hate favicon")
          break;
        default:
        console.log(request.url)
        break
  }
}).listen(3000)
console.log("Running")

