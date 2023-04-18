import "uno.css";
import "@unocss/reset/tailwind.css";
import DOM from "./src/constants/dom";
import { randomString } from "./src/utils/stringUtils.js";

const KEY_LOCAL_TASKS = "tasks";

const Tags = ["Web", "Update", "Design", "Content"];

class TaskVO {
  static fromJSON(json) {
    return new TaskVO(json.id, json.title, json.date, json.tag);
  }
  constructor(id, title, date, tag) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.tag = tag;
  }
}

const taskOperations = {
  [DOM.Template.Task.BTN_DELETE]: (taskVO, domTask) => {
    renderTaskPopup(taskVO, "Confirm delete task", "Delete", (taskTitle, taskDate, taskTag) => {
      console.log("> Delete task -> On Confirm", {
        taskTitle,
        taskDate,
        taskTag,
      });
      tasks.splice(tasks.indexOf(taskVO), 1);
      domTaskColumn.removeChild(domTask);
      saveTasks();
    });
  },
  [DOM.Template.Task.BTN_EDIT]: (taskVO, domTask) => {
    renderTaskPopup(taskVO, "Update task", "Update", (taskTitle, taskDate, taskTag) => {
      console.log("> Update task -> On Confirm", {
        taskTitle,
        taskDate,
        taskTag,
      });
      taskVO.title = taskTitle;
      const domTaskUpdated = renderTask(taskVO);
      domTaskColumn.replaceChild(domTaskUpdated, domTask);
      saveTasks();
    });
  },
};

const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTemplateTask = getDOM(DOM.Template.TASK);
const domTaskColumn = domTemplateTask.parentNode;
domTemplateTask.removeAttribute("id");
domTemplateTask.remove();

const rawTasks = localStorage.getItem(KEY_LOCAL_TASKS);

const tasks = rawTasks ? JSON.parse(rawTasks).map((json) => TaskVO.fromJSON(json)) : [];
tasks.forEach((taskVO) => renderTask(taskVO));
console.log("> tasks:", tasks);

domTaskColumn.onclick = (e) => {
  e.stopPropagation();
  console.log("domTaskColumn", e.target);
  const domTaskElement = e.target;
  const taskBtn = domTaskElement.dataset.btn;

  const isNotTaskBtn = !taskBtn;
  console.log("isNotTaskBtn", isNotTaskBtn);
  if (isNotTaskBtn) return;

  const allowedButtons = [DOM.Template.Task.BTN_EDIT, DOM.Template.Task.BTN_DELETE];

  if (!allowedButtons.includes(taskBtn)) return;

  let taskId = null;
  let btnParent = domTaskElement;
  let isTaskIdNotFound = false;
  do {
    btnParent = btnParent.parentNode;
    taskId = btnParent.dataset.id;
    isTaskIdNotFound = !taskId;
  } while (isTaskIdNotFound);

  console.log("> taskId", taskId);

  const taskVO = tasks.find((task) => task.id === taskId);
  console.log(">taskVO", taskVO);

  const operation = taskOperations[taskBtn];
  if (operation) {
    operation(taskVO, btnParent);
  }
};
getDOM(DOM.Button.CREATE_TASK).onclick = () => {
  console.log("> domPopupCreateTask.classList");
  renderTaskPopup(null, "Create task", "Create", (taskTitle, taskDate, taskTags) => {
    console.log("> Main -> CreateTask -> On Confirm");
    const taskId = `task_${Date.now()}`;
    const taskVO = new TaskVO(taskId, taskTitle, taskDate, taskTags);

    renderTask(taskVO);
    tasks.push(taskVO);

    saveTasks();
  });
};

function renderTask(taskVO) {
  const domTaskClone = domTemplateTask.cloneNode(true);
  domTaskClone.dataset.id = taskVO.id;
  QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
  domTaskColumn.prepend(domTaskClone);
  return domTaskClone;
}

async function renderTaskPopup(taskVO, popupTitle, confirmText, processDataCallback) {
  const domPopupContainer = getDOM(DOM.Popup.CONTAINER);
  const domSpinner = domPopupContainer.querySelector(".spinner");

  domPopupContainer.classList.remove("hidden");

  const onClosePopup = () => {
    domPopupContainer.children[0].remove();
    domPopupContainer.append(domSpinner);
    domPopupContainer.classList.add("hidden");
  };

  const TaskPopup = (await import("./src/view/popup/TaskPopup")).default;
  const taskPopupInstance = new TaskPopup(
    popupTitle,
    Tags,
    confirmText,
    (taskTitle, taskDate, taskTags) => {
      console.log("Main -> confirmCallbag", { taskTitle, taskDate, taskTags });
      onClosePopup();
      processDataCallback(taskTitle, taskDate, taskTags);
    },
    onClosePopup,
  );

  if (taskVO) {
    taskPopupInstance.taskTitle = taskVO.title;
  }

  // setTimeout(() => {
  domSpinner.remove();
  document.onkeyup = (e) => {
    if (e.key === "Escape") {
      onClosePopup();
    }
  };
  domPopupContainer.append(taskPopupInstance.render());
  // }, 1000);
}

function saveTasks() {
  localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));
}
