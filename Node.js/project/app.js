//problem: we need a simple way to lok at a user's badge count and javaScript points from a web browser.
//solution: Use node.js to perform the profile look ups and serve our templates via HTTP.

//1. create a web server

var http= require('https');
http.createServer(function(require, response){
  homeRoute(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');

function homeRoute(request, response) {
//if url === '/' && GET
    // show search
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function(){
  response.write(new Date() + "\n");
}, 1000);
  response.write("Header\n");
  response.write("Search\n");
  response.end("Footer\n");
  //response.end('Hello World\n');

  //if url === '/' && POSt
    //redirect to /:username
}
//3. handle HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
    //on "end"
      //show profile
      // on "error"
        //show error
//4.function that handles the reading of files and merge in values
  //read from file and get a string
    //merge values in to a string
