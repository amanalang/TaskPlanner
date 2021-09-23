function createTaskHtml (name,
  desc,
  owner,
  dueDate,
  status) {
    const html = `<li class="row mb-1 mt-1 pb-2 border border-secondary task-status-inprogress">
    <div class="col"><strong>${name}</strong></div>
            <div class="row mb-1">
              <div class="col col-md-3">${owner}</div>

            </div>          
            <div class="row mb-1">
              <div class="col col-md-3">${desc}</div>
 
            </div>
            <div class="row mb-1">
               <div class="col col-md-3">${dueDate}</div>

            </div>          
            <div class="row mb-1">
               <div class="col col-md-3">${status}</div>

            </div>
      </li>`;
    return html; 

  };

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
  render(){ 
  const taskHtmlList = []; 
  for (let i = 0; i < this.tasks.length; i++) {
    const task1 = this.tasks[i];
    const date = new Date(dueDate); 
    const formattedDate = date.toString(); 
    // Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.
    const taskHtml = createTaskHtml (
      task1.name,
      task1.desc,
      task1.owner, 
      formattedDate,
      task1.status,
    )
//push the taskHtml into the tasksHtmlList array.
    taskHtmlList.push(taskHtml); 
  };
// After looping through each task, create a new tasksHtml variable (think about your scoping), and set it to a string of HTML of all the tasks by joining the tasksHtmlList array together, separating each task's html with a newline.
  const newTaskHtml = taskHtmlList.join("\n");
  return newTaskHtml;
// Select the tasks list element and set its innerHTML to the tasksHtml.

}

}
