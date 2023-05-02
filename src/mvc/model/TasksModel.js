class TasksModel {
  #tasks = [];
  #updateCallback = [];

  constructor() {}
  set tasks(value) {
    this.#tasks = value;
    this.#updateCallback.forEach((c) => c(this.#tasks));
    this.#notify();
  }

  #notify() {
    this.#updateCallback.forEach((c) => c(this.#tasks));
  }
  addUpdateCallback(updateCallback) {
    if (!updateCallback || !(updateCallback instanceof Function)) {
      throw new Error(`Wrong callback: ${this.#updateCallback}`);
    }

    this.#updateCallback.push(updateCallback);
  }

  getTaskById(id) {
    const taskId = parseInt(id);
    const taskVO = this.#tasks.find((task) => task.id === taskId);
    console.log(">taskModel -> taskVO", taskVO);
    return taskVO;
  }
  addTask(taskVO) {
    console.log(">TaskModel -> addTask:", taskVO);
    //this.tasks = [...this.#tasks, taskVO];
    this.#tasks.push(taskVO);
    this.#notify();
  }

  deleteTaskById(id) {
    const taskId = parseInt(id);
    this.tasks = this.#tasks.filter((task) => task.id !== taskId);
  }

  updateTaskById(taskId, data) {
    console.log(">TaskModel -> updateTaskById:", { taskId, data });
    const taskVO = this.getTaskById(taskId);
    Object.assign(taskVO, data);
    this.#notify();
  }
}

export default TasksModel;
