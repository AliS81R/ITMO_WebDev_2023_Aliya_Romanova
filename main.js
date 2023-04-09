import "uno.css";
import "@unocss/reset/tailwind.css";
import DOM from "./src/contants/dom";
import { randomString } from "./src/utils/stringutils";

const Tags = ["Web", "Update", "Design", "Content"];

class TaskVO {
  constructor(title, date, tag) {
    this.title = title;
    this.date = date;
    this.tag = tag;
  }
}

const task = new TaskVO("Read", Date.now(), Tags[0]);
const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const tasks = [];
const domTask = getDOM(DOM.Template.TASK);

getDOM(DOM.Button.CREATE_TASK).onclick = () => {
  console.log("> domPopupCreateTask.classList");

  const domPopupCreateTask = getDOM(DOM.Popup.CREATE_TASK);
  const domBtnClose = QUERY(domPopupCreateTask, DOM.Button.POPUP_CREATE_TASK_CLOSE);
  const domBtnConfirm = QUERY(domPopupCreateTask, DOM.Button.POPUP_CREATE_TASK_CONFIRM);

  domPopupCreateTask.classList.remove("hidden");
  const onClosePopup = () => {
    domPopupCreateTask.classList.add("hidden");
    domBtnClose.onclick = null;
    domBtnConfirm.onclick = null;
  };

  //   domBtnConfirm.onclick = () => {
  //     console.log("confirm");
  //     const taskVO = new TaskVO(randomString(12), Date.now(), Tags[0]);
  //     const taskView = domTask.cloneNode(true);
  //     QUERY(taskView, DOM.Template.Task.TITLE).innerHTML = taskVO.title;
  //     domTask.parentNode.prepend(taskView);
  //     tasks.push(taskVO);
  //     console.log("createTask", taskVO);
  //
  //     onClosePopup();
  //   };
  // };

  let todoTasks = [];

  let CustomValidation = () => {};
  CustomValidation.prototype = {
    invalidate: [],
  };

  domBtnConfirm.onclick = () => {
    console.log("confirm");
    const taskVO = new TaskVO(this.title.value, Date.now(), Tags[0]);
    const taskView = domTask.cloneNode(true);
    QUERY(taskView, DOM.Template.Task.TITLE).innerHTML = taskVO.title;
    domTask.parentNode.prepend(taskView);
    tasks.push(taskVO);
    console.log("createTask", taskVO);

    onClosePopup();
  };
};

//
// const rowTasks = localStorage.getItem("tasks");
//
// if (rowTasks) {
//   tasks = JSON.parse(rowTasks);
// }
