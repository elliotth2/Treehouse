// we need a simple way to look at a user's badge count and JavaScript points
// use node/js to connect to Treehouse's APi to get profile information to print out
var http = require("http");
var username= "chalkers";
function printMessage(username, badgeCount, points) {
  var message=  username + "  has " + badgeCount + "total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}


// connect to API url
var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response){
  console.log(response.statusCode);
var body = "";
  //read data
  response.on('data', function(chunk){
    console.log('BODY:', chunk);
  body += chunk;
  });
response.on('end', function(){
  console.log(body);
});
  //parse the data
  //print the data out

});

request.on("error", function(error){
    console.error(error.message);

});
