var getData = function() {
    var tarea = document.getElementById('newTask').value;
    console.log(tarea);


}

const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault();
        const NewTask = document.getElementById('newTask');
        const NewTaskTex = newTask.value;
        NewTask.value = '';
        todos.push(NewTaskTex);
        const todoList = document.getElementById('todo-list');
        todoList.inneHTML = '';
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
        }
    }
}