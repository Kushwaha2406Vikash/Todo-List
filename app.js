document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('input');
    const addButton = document.querySelector('button');
    const taskList = document.querySelector('ul');

    addButton.addEventListener('click', function () {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            input.value = '';
        }
    });

    // Allow adding tasks by pressing Enter
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    // Delete task when delete button is clicked
    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    });
});