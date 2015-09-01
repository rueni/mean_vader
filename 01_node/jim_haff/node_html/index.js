var http = require('http');
var fs = require('fs')

var html = fs.readFileSync('./index.html')

var html = '<html><body><h1>Hey everybody</h1></body></html>';

http.createServer(function(request, response){

  response.writeHead(200);
  response.write(html);
  response.end();

}).listen(5000);


console.log('html server on port 5000');
