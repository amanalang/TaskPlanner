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

}
