class TasksModel {
  #tasks = [];
  #updateCallback = [];

  constructor() {}

  set tasks(value) {
    this.#tasks = value;
    this.#updateCallback.forEach((c) => c(this.#tasks));
  }

  addUpdateCallback(updateCallback) {
    if (!updateCallback || !(updateCallback instanceof Function)) {
      throw new Error(`Wrong callback: ${this.#updateCallback}`);
    }

    this.#updateCallback.push(updateCallback);
  }
}

export default TasksModel;
