document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  // Function to update task numbering
  const updateTaskNumbers = () => {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach((task, index) => {
      const taskNumber = task.querySelector('.task-number');
      taskNumber.textContent = `${index + 1}.`;
    });
  };

  // Add task
  addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task === '') {
      alert('Please enter a task!');
      return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');

    // Create task number
    const taskNumber = document.createElement('span');
    taskNumber.className = 'task-number';
    taskNumber.textContent = '1.'; // Placeholder, will be updated

    // Create task text span
    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    // Add event listener to toggle completed state
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
        taskText.style.color = '#888';
        removeButton.style.display = 'inline-block'; // Show the remove button
      } else {
        taskText.style.textDecoration = 'none';
        taskText.style.color = '#333';
        removeButton.style.display = 'none'; // Hide the remove button
      }
    });

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-task-btn';
    removeButton.style.display = 'none'; // Initially hidden
    removeButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      updateTaskNumbers(); // Update numbering after removal
    });

    // Append elements to the task item
    taskItem.appendChild(taskNumber);
    taskItem.appendChild(taskText);
    taskItem.appendChild(checkbox);
    taskItem.appendChild(removeButton);

    // Append the task item to the list
    taskList.appendChild(taskItem);

    // Update task numbers
    updateTaskNumbers();

    // Clear the input field
    taskInput.value = '';
  });
});
