//Problem: no user interaction causes no change to app
//Solution: when user interacts, causes changes appropriately.
var color = $(".selected").css("background-color");
//when clicking on control list items
$(".controls li").click(function(){
  //deselect sibling elements
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected");
  //cache current color
  color= $(this).css("background-color");
});

//when new color clicked,

  //show color select or hide color select

//when color sliders change

  //change the new color span

//when add color is pressed

  //append the color to the controls ul
  //select new color

//on mouse events on the canvas
  //draw lines
