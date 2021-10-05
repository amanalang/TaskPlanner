function createTaskHtml(name, desc, owner, dueDate, status, id) {
  let cssClass = status.toLowerCase().replace(" ", "");
  const html = `<li class= "col col-12 col-md-4 mb-1 mt-1" data-task-id="${id}">
            <div class="col border border-secondary pb-2 task-status-${cssClass}">

              <div class=""><strong>${name}</strong></div>
            <div class="mb-1">
              <div class="">Assign to:</div>
              <div class="">${owner}</div>
            </div>          
            <div class="">
              <div class="">Description:</div>
              <div class="">${desc}</div>
            </div>
            <div class="">
               <div class="">Due Date:</div>
               <div class="">${dueDate}</div>
            </div>          
            <div class="">
               <div class="">Status:</div>
               <div class="">${status}</div>
            </div>          
        

            <div class=" mt-3 text-right">   
            <button input type="submit" class="${
              status === "Done" ? "invisible" : ""
            } btn btn-sm btn-success btn-done"><i class="bi bi-calendar-check"></i></button>      
              <button input type="submit" class="btn btn-sm btn-primary"><i class="bi bi-pen"></i>
              </button>          
              <button input type="submit" class="btn btn-sm btn-danger delete-button"><i class="bi bi-trash"></i>
              </button>          

            </div>
          </div>
          </li>`;
  return html;
}

// create a task manager class
class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  // create a method Add task
  addTask(name, desc, owner, dueDate, status) {
    const task1 = {
      // increment the new id for each new task
      id: this.currentId++,
      name,
      description: desc,
      assignedTo: owner,
      dueDate: dueDate,
      status,
    };

    // push a new task in to the .this array
    this.tasks.push(task1);
    console.log("tasks", this.tasks);
  }

  //create a new method
  getTaskById(tasksId) {
    let foundTask;
    // Loop over the this.tasks array, for each task in the loop:
    for (let i = 0; i < this.tasks.length; i++) {
      // Store the current task in a variable called task

      let task = this.tasks[i];
      // Compare task.id to the passed in taskId, if its a match, store the task to the variable foundTask
      if (task.id === tasksId) {
        foundTask = task;
      }
    }
    //return the foundTask variable from the method.
    return foundTask;
  }
  //task 10 step 2 Create the deleteTask Method on TaskManager
  deleteTask(taskId) {
    //create a new variable newTasks and set it to an empty array.
    const newTasks = [];
    //Loop over the tasks, and for each iteration: Get the current task in the loop, store it in a variable task
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      //Check if task.id is not equal to the taskId passed as a parameter.
      if (task.id !== taskId) {
        //If the task.id is not equal to the taskId, push the task into the newTasks array.
        newTasks.push(task);
      }
    }

    //Set this.tasks to newTasks
    this.tasks = newTasks;
  }

  render() {
    const taskHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task1 = this.tasks[i];
      const date = new Date(task1.dueDate);
      const formattedDate = date.toLocaleDateString();
      // Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.
      const taskHtml = createTaskHtml(
        task1.name,
        task1.description,
        task1.assignedTo,
        formattedDate,
        task1.status,
        task1.id
      );
      //push the taskHtml into the tasksHtmlList array.
      taskHtmlList.push(taskHtml);
    }
    // After looping through each task, create a new tasksHtml variable (think about your scoping), and set it to a string of HTML of all the tasks by joining the tasksHtmlList array together, separating each task's html with a newline.
    // Select the tasks list element and set its innerHTML to the tasksHtml.

    const newTaskHtml = taskHtmlList.join("\n");
    return newTaskHtml;
  }
  //in the TaskManager class, create a save method. This method doesn't require any parameters.
  save() {
    // Create a JSON string of the tasks
    const taskJson = JSON.stringify(this.tasks);
    // Store the JSON string in localStorage under the key tasks
    localStorage.setItem("tasks", taskJson);
    // Convert the this.currentId to a string and store it in a new variable
    const currentId = String(this.currentId);
    // Store the currentId variable in localStorage under the key currentId
    localStorage.setItem("currentId", currentId);
  }
  //   We'll also be converting the currentId number we converted as a string, back to a number. Add a new method called load. This method doesn't require any parameters
  load() {
    //check if any tasks are saved in localStorage with localStorage.getItem()
    if (localStorage.getItem("tasks")) {
      //get the JSON string of tasks stored in localStorage with localStorage.getItem(), making sure to pass the key we used to save the tasks, tasks. Store this string into a new variable,
      const tasksJson = localStorage.getItem("tasks");
      // Convert the tasksJson string to an array using JSON.parse() and store it in this.tasks
      this.tasks = JSON.parse(tasksJson);
    }
    //check if the currentId is saved in localStorage with localStorage.getItem()
    if (localStorage.getItem("currentId")) {
      //get the currentId in localStorage using localStorage.getItem() and store it in a new variable, currentId
      const currentId = localStorage.getItem("currentId");
      //Convert the currentId to a number before storing it to the TaskManager's this.currentId
      this.currentId = Number(currentId);
    }

    return this.tasks.length;
  }
}
//Stretch Goal-Hiding the "Done" Button For Completed Tasks
//Stretch Goal - Change the Styling of the Task Status
