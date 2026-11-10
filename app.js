console.log("Connected");

var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskLists = document.getElementById("taskLists");
var totalTasks = document.getElementById("totalTasks");
var completedTasks = document.getElementById("completedTasks");

addBtn.onclick = function () {
  var taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task to execute");
  } else {
    var li = document.createElement("li");
    var icon = document.createElement("i");
    var taskText = document.createElement("span");

    icon.setAttribute("class", "fa-regular fa-circle");
    icon.style.cursor = "pointer";

    taskText.innerText = taskValue;
    taskText.setAttribute("class", "task-text");

    var status = document.createElement("span");
    var statusIcon = document.createElement("i");
    var statusText = document.createElement("span");

    status.setAttribute("class", "status");
    status.style.backgroundColor = "rgba(7, 104, 231, 0.3)";
    statusIcon.setAttribute("class", "fa-regular fa-clock");
    statusIcon.style.color = "rgb(7, 104, 231)";
    statusIcon.style.cursor = "pointer";
    statusText.innerText = "Pending";
    statusText.style.color = "rgb(7, 104, 231)";
    statusText.style.fontSize = "14px";

    var deleteBtn = document.createElement("button");
    var deleteIcon = document.createElement("i");

    deleteBtn.type = "button";
    deleteBtn.setAttribute("class", "delete-btn");
    deleteIcon.setAttribute("class", "fa-solid fa-trash-can");
    deleteIcon.style.color = "white";
    deleteIcon.style.cursor = "pointer";

    li.appendChild(icon);
    li.appendChild(taskText);
    status.appendChild(statusIcon);
    status.appendChild(statusText);
    li.appendChild(status);
    deleteBtn.appendChild(deleteIcon);
    li.appendChild(deleteBtn);
    taskLists.appendChild(li);

    taskInput.value = "";

    updateCount();
    icon.onclick = function () {
      if (statusText.innerText === "Pending") {
        li.style.backgroundColor = "rgba(0, 128, 0, 0.1)";

        icon.setAttribute("class", "fa-solid fa-circle-check");
        icon.style.color = "green";

        taskText.style.color = "gray";
        taskText.style.textDecoration = "line-through";

        status.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
        statusIcon.setAttribute("class", "fa-solid fa-circle-check");
        statusIcon.style.color = "white";

        statusText.innerText = "Completed";
        statusText.style.color = "white";
      } else {
        li.style.backgroundColor = "";

        icon.setAttribute("class", "fa-regular fa-circle");
        icon.style.color = "";

        taskText.style.color = "";
        taskText.style.textDecoration = "none";
        status.style.backgroundColor = "rgba(7, 104, 231, 0.3)";
        statusIcon.setAttribute("class", "fa-regular fa-clock");
        statusIcon.style.color = "rgb(7, 104, 231)";

        statusText.innerText = "Pending";
        statusText.style.color = "rgb(7, 104, 231)";
      }
      updateCount();
    };

    deleteBtn.onclick = function () {
      taskLists.removeChild(li);
      updateCount();
    };
  }
};

function updateCount() {
  var allTasks = taskLists.getElementsByTagName("li");

  var completed = 0;

  for (var i = 0; i < allTasks.length; i++) {
    var task = allTasks[i].querySelector(".task-text");
    if (task.style.textDecoration === "line-through") {
      completed++;
    }
  }

  document.querySelector("#totalTasks span").innerText = allTasks.length;
  document.querySelector("#completedTasks span").innerText = completed;
}
