import "uno.css";
import "@unocss/reset/tailwind.css";


const domBtnCreateTask = document.getElementById('btnCreateTask');
const domPopupCreateTask = document.getElementById('popupCreateTask');

domBtnCreateTask.onclick = () => {
    console.log('click');
    domPopupCreateTask.classList.remove('hidden');

    const domBtnCloseCreateTaskPopup = document.getElementById('btnCloseCreateTaskPopup');

    domBtnCloseCreateTaskPopup.onclick = () => {
        domPopupCreateTask.classList.add('hidden');
        domBtnCloseCreateTaskPopup.onclick = null;
    };

};


const domNewTodoTask = document.getElementById('TodoTask');
const domBtnCreateNewTask = document.getElementById('btnCreateNewTask');

 let tasks = [];
let todoTasks = [];

if (!localStorage.tasks) {
    return tasks;
} else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
}



