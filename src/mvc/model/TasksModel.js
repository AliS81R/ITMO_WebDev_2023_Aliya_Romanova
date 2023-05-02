class TasksModel {
  #tasks = [];
  #updateCallback = [];

  constructor() {}
  set tasks(value) {
    this.#tasks = value;
    this.#updateCallback.forEach((c) => c(this.#tasks));
    this.#update();
  }

  #update() {
    this.#updateCallback.forEach((c) => c(this.#tasks));
  }
  addUpdateCallback(updateCallback) {
    if (!updateCallback || !(updateCallback instanceof Function)) {
      throw new Error(`Wrong callback: ${this.#updateCallback}`);
    }

    this.#updateCallback.push(updateCallback);
  }

  getTaskBuId(id) {
    const taskVO = this.#tasks.find((task) => task.id === id);
    console.log(">taskModel -> taskVO", taskVO);
    return taskVO;
  }
  addTask(taskVO) {
    console.log(">TaskController -> addTask:", taskVO);
    //this.tasks = [...this.#tasks, taskVO];
    this.#tasks.push(taskVO);
    this.#update();
  }
}

export default TasksModel;
