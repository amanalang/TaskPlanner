// step 1: Implement JavaScript function to validate your form fields
const taskForm = document.getElementById("newTaskForm");

let taskName = document.querySelector("#taskName");
let taskOwner = document.querySelector("#taskOwner");
let taskDescription = document.querySelector("#taskDescription");
let dueDate = document.querySelector("#dueDate");
let status = document.querySelector("#status");

taskForm.addEventListener("submit", validateTask);

// Form validation for Task Name Field min length 5
function validateTask() {
  console.log("Task:  " + taskName.value);
  console.log("Task Assigned To :" + taskOwner.value);
  console.log("Task Description :" + taskDescription.value);
  console.log("Task Due Date :" + dueDate.value);
  console.log("Task Status:" + status.value);
  //step 2: Validation logic
  if (taskName.value.trim().length > 5) {
    console.log("task name is valid");
  } else {
    console.log("task name is invalid");
  }

  if (taskDescription.value.trim().length > 5) {
    console.log("task description is valid");
  } else {
    console.log("task description is invalid");
  }

  if (taskOwner.value.trim().length > 5) {
    console.log("task owner is valid");
  } else {
    console.log("task owner is invalid");
  }

  if (dueDate.value.length > 0) {
    console.log("dueDate is valid");
  } else {
    console.log("dueDate is invalid");
  }

  if (status.value.length > 0) {
    console.log("status is valid");
  } else {
    console.log("status is invalid");
  }
}
// Form validation for Task Description Field min length 5
