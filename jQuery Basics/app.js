//problem: It looks gross in smaller in browser widths and small devices
// solution: hide text links and swap them out with a more appropriate navagation

//1 create a select and append to menu
var $select= $("<select></select>");
$("#menu").append($select);

//2 cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
//3 create an option
  var $anchor = ($anchor.text());
//4 option's value is the href
  $option.val($anchor.attr("href"));
//5 option's text is the text of link
  $option.text($anchor.text());
//6 append option to select
  $select.append($option);

});

//7 create a button
  //bind click to button
  // go to select's location
//8 modify CSS to hide links on small width and show button and select
//also hides select and button on larger width
//deal with selected options depending on current page
