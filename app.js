let divTasks = document.querySelector("#tasks");
let tasks = localStorage.getItem("tasks") || [];

if (tasks.length != 0) tasks = JSON.parse(tasks);

document.querySelector("#addTask").addEventListener("keyup", (e) => {
    if (e.key == "Enter") addTasks();
});

function showTasks () {
    divTasks.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let divTask = document.createElement("div");
        divTask.id = "task";
        divTask.className = "task" + tasks[i];
        divTasks.appendChild(divTask);
        let h1TaskName = document.createElement("h1");
        h1TaskName.id = "taskName";
        h1TaskName.innerHTML = tasks[i];
        divTask.appendChild(h1TaskName); 
        let h1DeleteTask = document.createElement("h1");
        h1DeleteTask.id = "deleteTask";
        h1DeleteTask.innerHTML = "x";
        h1DeleteTask.addEventListener("click", () => {
            tasks.splice(tasks.indexOf(tasks[i]), 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        });
        h1DeleteTask.addEventListener("mouseenter", () => {
            divTask.style.backgroundColor = "red";
        });
        h1DeleteTask.addEventListener("mouseleave", () => {
            divTask.style.backgroundColor = "black";
        });
        divTask.appendChild(h1DeleteTask); 
    }
}

showTasks();

function addTasks () {
    let input = document.querySelector("#addTask");
    let inputValue = input.value;
    if (inputValue == "") return;
    tasks = [inputValue, ...tasks];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
    input.value = '';
}
