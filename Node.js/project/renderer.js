var fs = require('fs');
function mergeValues(values, contents){
  //cycle over the keys
  //replace all {{key}} with values from values object

  for(var key in values) {
    content = content.replace('{{' + key +'}}', values[key]);
  }

  //return merged content
}
function view(templateName, values, response){
  //read from template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"}); 

    //insert values in to the content
    fileContents= mergeValues(values, fileContents);
    //write out to the response

    response.write(fileContents);


}
module.exports.view = view;
