function createTaskHtml(name, desc, owner, dueDate, status) {
  let cssClass = status.toLowerCase().replace(" ", "");
  const html = `<li class="row mb-1 mt-1 pb-2 border border-secondary task-status-${cssClass}">
            <div class="col col-xs-12">

              <div class="col"><strong>${name}</strong></div>
            <div class="row mb-1">
              <div class="col col-md-3">Assign to:</div>
              <div class="col col-md-9">${owner}</div>
            </div>          
            <div class="row mb-1">
              <div class="col col-md-3">Description:</div>
              <div class="col col-md-9">${desc}</div>
            </div>
            <div class="row mb-1">
               <div class="col col-md-3">Due Date:</div>
               <div class="col col-md-9">${dueDate}</div>
            </div>          
            <div class="row mb-1">
               <div class="col col-md-3">Status</div>
               <div class="col col-md-9">${status}</div>
            </div>          
        

            <div class=" mt-3 text-right">         
              <button input type="submit" class="btn btn-primary"><i class="bi bi-pen"></i>
              </button>          
              <button input type="submit" class="btn btn-danger"><i class="bi bi-trash"></i>
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
        task1.status
      );
      //push the taskHtml into the tasksHtmlList array.
      taskHtmlList.push(taskHtml);
    }
    // After looping through each task, create a new tasksHtml variable (think about your scoping), and set it to a string of HTML of all the tasks by joining the tasksHtmlList array together, separating each task's html with a newline.
    const newTaskHtml = taskHtmlList.join("\n");
    return newTaskHtml;
    // Select the tasks list element and set its innerHTML to the tasksHtml.
  }
}
