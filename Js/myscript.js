var student = []
function addStudent(){
  var names = prompt("which names Would you like to add:");
  student.push(names)
}

function remove(){
  var rem = prompt("which names do you like to remove:");
  var index = student.indexOf(rem);
  student.splice(index,1)
}

function display(){
  //console.log(student);
student.forEach(alert);
}

var start = prompt("Would like to start web application: y/n");
var request = "empty";

if (start === "y") {
  while (request !== "quit") {
    request = prompt("select an action:add,display,remove or quit")
    if (request === "add") {
      addStudent();
    }else if (request === "display") {
      display();
    }else if (request == "remove") {
      remove();
    }
  }
}
alert("Thank for using our web application, Refresh to start over")
