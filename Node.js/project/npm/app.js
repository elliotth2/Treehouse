var unsecurePlainTextPassword = "password";
var colors= require("colors");
// Store hash in your password DB.

var bcrypt= require('bcrypt');
bcrypt.genSalt(10, function(err, salt){
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
    console.log(hash.green);
  });
});
