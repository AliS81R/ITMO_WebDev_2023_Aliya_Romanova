import "uno.css";
import "@unocss/reset/tailwind.css";

const domBtnCreateTask = document.getElementById("btnCreateTask");
const domPopupCreateTask = document.getElementById("popupCreateTask");

domBtnCreateTask.onclick = () => {
  console.log("click");
  domPopupCreateTask.classList.remove("hidden");

  const domBtnCloseCreateTaskPopup = document.getElementById("btnCloseCreateTaskPopup");

  domBtnCloseCreateTaskPopup.onclick = () => {
    domPopupCreateTask.classList.add("hidden");
    domBtnCloseCreateTaskPopup.onclick = null;
  };
};

let tasks = [];
let todoTasks = [];

const rowTasks = localStorage.getItem("tasks");

if (rowTasks) {
  tasks = JSON.parse(rawTasks);
}
