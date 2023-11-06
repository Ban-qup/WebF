document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var task = document.getElementById("todo-input").value;
  var time = new Date();
  var li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  var taskText = document.createElement("span");
  taskText.textContent = task;
  var timeText = document.createElement("span");
  timeText.textContent = " (added at " + time.toLocaleTimeString() + ")";
  timeText.className = "ml-2 text-muted";
  li.appendChild(taskText);
  li.appendChild(timeText);
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });
  li.appendChild(deleteBtn);
  document.getElementById("todo-list").appendChild(li);
  document.getElementById("todo-input").value = "";
});
