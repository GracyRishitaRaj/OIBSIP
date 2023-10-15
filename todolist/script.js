function addTask() {
    const taskNameInput = document.getElementById("task-name");
    const taskDateInput = document.getElementById("task-date");
    const taskName = taskNameInput.value.trim();
    const taskDate = new Date(taskDateInput.valueAsNumber);
  
    if (taskName && !isNaN(taskDate)) {
      const task = document.createElement("li");
      task.innerHTML = `${taskName} (Due Date: ${taskDate.toISOString().split('T')[0]}) <button onclick="completeTask(this)">Complete</button> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;
      
      const pendingTasksList = document.getElementById("pending-tasks-list");
      const completedTasksList = document.getElementById("completed-tasks-list");
      const now = new Date();
  
      if (taskDate >= now) {
        task.classList.add("pending");
        pendingTasksList.appendChild(task);
      } else {
        task.classList.add("complete");
        completedTasksList.appendChild(task);
        toggleTaskButtons(task);
      }
  
      taskNameInput.value = "";
      taskDateInput.value = "";
    }
  }
  
  function editTask(editButton) {
    const taskText = prompt("Edit the task:", editButton.parentElement.textContent.split(" (Due Date:")[0]);
    if (taskText) {
      editButton.parentElement.firstChild.textContent = taskText;
    }
  }
  
  function completeTask(completeButton) {
    const task = completeButton.parentElement;
    const pendingTasksList = document.getElementById("pending-tasks-list");
    const completedTasksList = document.getElementById("completed-tasks-list");
  
    if (task.classList.contains("pending")) {
      task.classList.remove("pending");
      task.classList.add("complete");
      completedTasksList.appendChild(task);
      toggleTaskButtons(task);
    } else {
      task.classList.remove("complete");
      task.classList.add("pending");
      pendingTasksList.appendChild(task);
      toggleTaskButtons(task);
    }
  }
  
  function deleteTask(deleteButton) {
    const task = deleteButton.parentElement;
    task.remove();
  }
  
  function toggleTaskButtons(task) {
    const completeButton = task.querySelector("button:nth-child(1)");
    const editButton = task.querySelector("button:nth-child(2)");
    const deleteButton = task.querySelector("button:nth-child(3)");
  
    if (task.classList.contains("complete")) {
      completeButton.textContent = "Pending";
    } else {
      completeButton.textContent = "Complete";
    }
  
    editButton.style.display = "inline";
    deleteButton.style.display = "inline";
  }
  