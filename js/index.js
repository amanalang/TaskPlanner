const taskForm = document.getElementById("taskName"); 

let taskName = document.querySelector("#taskName");
let taskOwner = document.querySelector("#taskOwner");
let taskDescription = document.querySelector("#taskDescription");
let dueDate = document.querySelector("#dueDate"); 
let status = document.querySelector("#status"); 

taskForm.addEventListener("submit", validateTask) 

console.log("Task:  " + taskName.value.length);
console.log("Task Assigned To :" + taskOwner.value.length);
console.log("Task Description :" + taskDescription.value.length);
console.log("Task Due Date :" + dueDate.value);
console.log("Task Status:" + status.value);

// Form validation for Task Name Field min length 5
  function validateTask () {
    if (taskName.value.length > 5) {
      let taskNameInput = taskName;
    } else {
      errMsg.innerHTML = "Enter more than 5 characters to be a valid task name"
    }
  }
// Form validation for Task Description Field min length 5


  









