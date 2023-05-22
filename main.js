import "@unocss/reset/tailwind.css";
import "toastify-js/src/toastify.css";
import DOM from "./src/constants/dom";

import { delay } from "./src/utils/timeUtils.js";

import Toastify from "toastify-js";

import TasksModel from "./src/mvc/model/TasksModel.js";
import TasksController from "./src/mvc/controller/TasksController.js";

const KEY_LOCAL_TASKS = "tasks";

const Tags = ["Web", "Update", "Design", "Content"];

const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTemplateTask = getDOM(DOM.Template.TASK);
const domTaskColumn = domTemplateTask.parentNode;

const tasksModel = new TasksModel();
const tasksController = new TasksController(tasksModel);
mport "uno.css";
i
domTemplateTask.removeAttribute("id");
domTemplateTask.remove();

function renderTask(taskVO) {
  const domTaskClone = domTemplateTask.cloneNode(true);
  domTaskClone.dataset.id = taskVO.id;
  QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
  domTaskColumn.prepend(domTaskClone);
  return domTaskClone;
}

const showToastWithText = (text) =>
  Toastify({
    text,
    duration: 3000,
    close: true,
  }).showToast();

async function main() {
  tasksModel.addUpdateCallback((tasks) => {
    console.log("> addUpdateCallback: ", tasks);
    domTaskColumn.innerHTML = "";
    tasks.forEach((taskVO) => renderTask(taskVO));
  });
  tasksController
    .retrieveTasks()
    .then(() => {})
    .catch((e) => {});

  const taskOperations = {
    [DOM.Button.CREATE_TASK]: () => {
      renderTaskPopup(
        null,
        "Create task",
        "Create",
        (taskTitle, taskDate, taskTags) => {
          console.log("> Create task -> On Confirm");
          tasksController
            .createTask(taskTitle, taskDate, taskTags)
            .then((taskVO) => {
              console.log("> Create task -> On Confirm: Success");
              showToastWithText(`You task saved: ${taskVO.title}`);
            })
            .catch((error) => {
              console.log("> Create task -> On Confirm: Error =", error);
              window.alert(`Error on server: ${error.toString()}`);
            });
        },
      );
    },
    [DOM.Template.Task.BTN_DELETE]: (taskId) => {
      const taskVO = tasksModel.getTaskById(taskId);
      renderTaskPopup(
        taskVO,
        "Confirm delete task?",
        "Delete",
      import { OPERATIONS } from "./calculate.js";

      const inputNum1 = document.querySelector("#num-1");
      const inputNum2 = document.querySelector("#num-2");
      const btnRes = document.querySelector("#btn-res");
      const selectOperation = document.querySelector("#select-operation");
      const outputRes = document.querySelector("#output");

      selectOperation.innerHTML = "";

      Object.entries(OPERATIONS).forEach(([key, value]) => {
        console.log(key, value);
        const option = document.createElement("option");
        option.value = key;
        option.textContent = value.title;
        selectOperation.appendChild(option);
      });

      btnRes.addEventListener("click", function () {
        const a = parseInt(inputNum1.value);
        const b = parseInt(inputNum2.value);
        const operationKey = selectOperation.value;
        const operation = OPERATIONS[operationKey];
        if (operation) {
          const result = operation.method(a, b);
          outputRes.innerHTML = result;
        } else {
          alert("Wrong operation:", operationKey);
        }
      });
