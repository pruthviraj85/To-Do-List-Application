

document.addEventListener("DOMContentLoaded", loadTasks)
function addTask() {
    let taskInput = document.querySelector("#taskInput").value.trim()
    let priority = document.querySelector("#priority").value
    if (taskInput === "") {
        alert("Please enter a task")
        return
    }

    let tasklist = document.getElementById("tasklist")
    let li = document.createElement("li")
    // console.log(priority)
    li.innerHTML = `<span class="${priority}">${taskInput}</span>
                    <div>
                        <input type="checkbox" onclick="toggleComplete(this)">
                        <i class="fas fa-edit" onclick="editTask(this)"></i>
                        <i class="fas fa-trash" onclick="deleteTask(this)"></i>
                    </div>`;
    tasklist.appendChild(li);
    saveTasks();

}

function deleteTask(ele) {
    // console.log(ele)
    ele.parentElement.parentElement.remove()

}


function toggleComplete(checkbox) {
    let task = checkbox.parentElement.parentElement
    // console.log(task)
    task.classList.toggle("completed")
    saveTasks()


    // console.log(sfd)
}


function editTask(ele) {
    // console.log(ele)
    let taskspan = ele.parentElement.parentElement.querySelector("span")
    let newTask = prompt("Edit Task:", taskspan.textContent)
    if (newTask) taskspan.textContent = newTask
    saveTasks()

}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("tasklist").innerHTML)
}

function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        document.getElementById("tasklist").innerHTML = savedTasks;
    }
}
function searchTasks() {
    let filter = document.getElementById("searchInput").value.toLowerCase();
    let tasks = document.getElementById("tasklist").getElementsByTagName("li")
    for (let task of tasks) {
        let text = task.textContent.toLowerCase()
        task.style.display = text.includes(filter) ? "flex" : "none"
    }
}
