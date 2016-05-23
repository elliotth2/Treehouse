//problem: Hints are shown even when form is valid
// Solution: hide and show them at appropriate times

//hide hints
$("form span").hide();

function passwordEvent() {

    //find out if password is valid
    if()$(this).val().length > 8){
      //hide hint if valid
      $(this).next().hide();
    } else {
      //else show hint
      $(this).next().show();
      }
}
function confirmPasswordEvent(){

}
//when event happens on password input
$("#password").focus(passwordEvent.keyup(passwordEvent);
//when event happens on confirmation match
  //find out if password and confirmation match
    //hide hint if match
    //else show hint
