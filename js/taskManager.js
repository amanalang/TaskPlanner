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
              <button input type="submit" class="btn btn-sm btn-primary"><i class="bi bi-pen"></i>
              </button>          
              <button input type="submit" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i>
              </button>          
              <button input type="submit" class="${
                status === "Done" ? "invisible" : ""
              } btn btn-sm btn-success btn-done"><i class="bi bi-calendar-check"></i></button>
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
}
//Stretch Goal-Hiding the "Done" Button For Completed Tasks
//Stretch Goal - Change the Styling of the Task Status.
