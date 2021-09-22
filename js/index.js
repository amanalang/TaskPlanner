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
  .preventDefault() 
  console.log("Task:  " + taskName.value);
  console.log("Task Assigned To :" + taskOwner.value);
  console.log("Task Description :" + taskDescription.value);
  console.log("Task Due Date :" + dueDate.value);
  console.log("Task Status:" + status.value);
  //step 2: Validation logic
  // Form validation for Task Description Field min length 5

  if (taskName.value.trim().length > 5) {
    taskName.classList.add("is-valid");
    taskName.classList.remove("is-invalid");
    console.log("task name is valid");
  } else {
    taskName.classList.add("is-invalid");
    taskName.classList.remove("is-valid");
    console.log("task name is invalid");
  }

  if (taskDescription.value.trim().length > 5) {
    taskDescription.classList.add("is-valid");
    taskDescription.classList.remove("is-invalid");
    console.log("task description is valid");
  } else {
    taskDescription.classList.add("is-invalid");
    taskDescription.classList.remove("is-valid");
    console.log("task description is invalid");
  }

  if (taskOwner.value.trim().length > 5) {
    taskOwner.classList.add("is-valid");
    taskOwner.classList.remove("is-invalid");
    console.log("task owner is valid");
  } else {
    taskOwner.classList.add("is-invalid");
    taskOwner.classList.remove("is-valid");
    console.log("task owner is invalid");
  }

  if (dueDate.value.length > 0) {
    dueDate.classList.add("is-valid");
    dueDate.classList.remove("is-invalid");
    console.log("dueDate is valid");
  } else {
    dueDate.classList.add("is-invalid");
    dueDate.classList.remove("is-valid");
    console.log("dueDate is invalid");
  }

  if (status.value.length > 0) {
    status.classList.add("is-valid");
    status.classList.remove("is-invalid");
    console.log("status is valid");
  } else {
    status.classList.add("is-invalid");
    status.classList.remove("is-valid");
    console.log("status is invalid");
  }
}
