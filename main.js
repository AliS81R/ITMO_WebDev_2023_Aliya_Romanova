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
  const domCreateTask = getDOM(DOM.Popup.Input.INFO_TITLE);
  const domCreateDate = getDOM(DOM.Popup.Input.INFO_DATE);

  domPopupCreateTask.classList.remove("hidden");
  const onClosePopup = () => {
    domPopupCreateTask.classList.add("hidden");
    domBtnClose.onclick = null;
    domBtnConfirm.onclick = null;
  };

  domBtnConfirm.onclick = () => {
    let titleInfo = domCreateTask.value;
    domCreateTask.innerHTML = titleInfo;
    let dateInfo = domCreateDate.value;
    domCreateDate.innerHTML = dateInfo;
    let userDate = Date.parse(dateInfo);
    console.log(dateInfo);

    const taskVO = new TaskVO(titleInfo, userDate, Tags[0]);
    const taskView = domTask.cloneNode(true);
    QUERY(taskView, DOM.Template.Task.TITLE).innerHTML = taskVO.title;
    domTask.parentNode.prepend(taskView);
    tasks.push(taskVO);

    // console.log("createTask", taskVO);

    onClosePopup();
  };
};

//
// const rowTasks = localStorage.getItem("tasks");
//
// if (rowTasks) {
//   tasks = JSON.parse(rowTasks);
// }
