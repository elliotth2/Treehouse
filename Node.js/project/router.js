var Profile = require('./profile.js');
var renderer = require('./renderer.js');

//handle HTTP route get/ and post/ i.e. home
function home(request, response) {
  //if url == "/" && GET
  if (request.url === "/"){
    //show search
    response.writeHead(200, {'content-Type'; 'text/plain'});
    response.view("header", {}, response);
    response.view("search", {}, response);
    response.view("Footer", {}, response);

  }

}
// Handle 
