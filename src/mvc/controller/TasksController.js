import TaskVO from "../model/TaskVO/TaskVO.js";

class TasksController {
  #model;

  constructor(model) {
    this.#model = model;
  }
  async retrieveTasks() {
    this.#model.tasks = await fetch("http://localhost:3000/tasks")
      .then((response) => response.ok && response.json())
      .then((rawTasks) => {
        if (rawTasks && rawTasks instanceof Object) {
          console.log("json", rawTasks);
          return rawTasks.map((rawJson) => TaskVO.fromJSON(rawJson));
        } else {
          window.alert("Problem with data parsing try refresh later");
          return [];
        }
      })
      .catch((e) => {
        window.alert("Server error: " + e.toString());
      });
  }
  createTask(taskTitle, taskDate, taskTags) {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskTitle,
        date: taskDate,
        tags: taskTags,
      }),
    });

    const taskId = `task_${Date.now()}`;
    const taskVO = new TaskVO(taskId, taskTitle, taskDate, taskTags);

    // renderTask(taskVO);
    // tasks.push(taskVO);
    // saveTasks();
  }
}

export default TasksController;
