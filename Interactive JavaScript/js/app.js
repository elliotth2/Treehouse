//Problem: User Interaction doesnt provide desired results
//solution: Add interactivity so the user can manage daily tasks.

 var taskInput = document.getElementById("new-task"); //new task
 var addButton= document.getElementsByTagName("button")[0];//first button
 var incompleteTasksHolder= document.getElementById("incomplete-tasks");//incomplete-task
 var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

//new task li
var createNewTaskElement = function(taskString){
  //create List Item
  var listItem = document.createElement("li");
    //input checkbox
    var checkBox = document.createElement("input");
    //label
    var label = document.createElement("label");
    //input text
    var editInput= document.createElement("input");
    //button.edit
    var edutButton= document.createElement("button");
    //button.delete
    var deleteButton= document.createElement("button");
    //each element needs modifying
    checkBox.type = "checkbox";
    editInput.type = "type";
    editButton.innerTEXT = "Edit";
    deleteButton.innerTEXT = "Delete";
    editButton.className= "edit";
    deleteButton.className= "delete";

    //each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

//add new task
var addTask= function(){
  console.log("Add task.");
 var listItem = createNewTaskElement("taskInput.value");

 //append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItems, taskCompleted);
  }

//Edit an existing task
var editTask= function(){
  console.log("edit task...");


var listItem= this.parentNode;

var editInput= thisItem.querySelector("input[type= text]");
var label = listItem.querySelector("[type=text]");

var containsClass= listItem.classList.contains("editMode");

  //if class of the parent is .editMode
  if(containsClass) {
    //switch from .editMode
    // label text become the input's value
    label.innerText = editInput.value;
  } else{
    //switch to editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }
  //Toggle .editMode on the parent
  listItem.classList.toggle("editMode");
}
//delete an existing task
var deleteTask= function(){
  console.log("delete task...");
  var listItem= this.parentNode;
  var ul= listItem.parentNode;
  //when delete pressed
    //remove parent list item from UL
ul.removeChild(listItem);

}

//mark a task as complete
var taskCompleted= function(){
  console.log("task complete...");

    //append the task li to the #completed-tasks
    var listItem= this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItems, taskIncomplete);
}
//mark a task as incomplete
var taskIncomplete= function(){
  console.log("task incomplete...");

  //when checkbox is unchecked
    //append the task li to the #incompleted-tasks
    var listItem= this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItems, taskCompleted);

    taskInput.value="";

}

var bindTaskEvents= function(taskListItem, checkBoxEventHandler){
  console.log("Bind list item events");
  //select list item"s children
  var checkBox= taskListItem.querySelector("input[type=checkbox]");
  var editButton= taskListItem.querySelector("button.edit");
  var deleteButton= taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBOxEventHandler button
  checkBox.onchange = checkBoxEventHandler;
}

  var ajaxRequest= function() {
    console.log("Ajax Request");
    };


//set click handler to the addTask function
addButton.onclick= addTask("click", addTask);
addButton.addEventListener("click", ajaxRequest)


//cycle over incompleteTaskHolder ul list items
for (var i= 0; 1 < incompleteTasksHolder.children.length; i++){
  //bind events to list item's children(taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTaskHolder ul list items
for (var i= 0; 1< incompleteTasksHolder.children.length; i++){
  //bind events to list item's children(taskCompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}


  //bind events to list item's children(taskInomplete)
