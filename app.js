let divTasks = document.querySelector("#tasks");
let tasks = [];

function showTasks () {
    divTasks.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let divTask = document.createElement("div");
        divTask.id = "task";
        divTask.className = "task" + tasks[i];
        divTasks.appendChild(divTask);
        let h1TaskName = document.createElement("h1");
        h1TaskName.id = "taskName";
        h1TaskName.innerHTML = tasks[i].name;
        divTask.appendChild(h1TaskName); 
        let h1DeleteTask = document.createElement("h1");
        h1DeleteTask.id = "deleteTask";
        h1DeleteTask.innerHTML = "x";
        h1DeleteTask.addEventListener("click", () => {
            tasks.splice(tasks.indexOf(tasks[i]), 1);
            showTasks();
        });
        h1DeleteTask.addEventListener("mouseenter", () => {
            document.querySelector(".task" + tasks[i]).style.backgroundColor = "red";
        });
        h1DeleteTask.addEventListener("mouseleave", () => {
            document.querySelector(".task" + tasks[i]).style.backgroundColor = "black";
        });
        divTask.appendChild(h1DeleteTask); 
    }
}

function addTasks () {
    let input = document.querySelector("#addTask");
    let inputValue = input.value;
    let task = {
        name: inputValue
    };
    tasks = [task, ...tasks];
    showTasks();
    input.value = '';
}
