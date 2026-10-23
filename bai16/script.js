let todos = [
    { id: 1, text: "Đọc chương HTML5 cơ bản", completed: true },
    { id: 2, text: "Làm bài tập CSS Grid", completed: false },
    { id: 3, text: "Quay video OBS nộp bài", completed: false }
];

function render() {
    const listEl = document.getElementById("todo-list");
    listEl.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.completed ? "completed" : ""}`;

        li.innerHTML = `
            <div class="todo-left" onclick="toggleTodo(${todo.id})">
                <div class="custom-checkbox"></div>
                <span class="todo-text">${todo.text}</span>
            </div>
            <button class="btn-delete" onclick="deleteTodo(${todo.id})">Xoá</button>
        `;

        listEl.appendChild(li);
    });

    updateRemaining();
}

function addTodo() {
    const inputEl = document.getElementById("todo-input");
    const text = inputEl.value.trim();

    if (text !== "") {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        inputEl.value = "";
        render();
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    render();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function updateRemaining() {
    const remaining = todos.filter(todo => !todo.completed).length;
    document.getElementById("remaining-count").innerText = `Còn ${remaining} việc chưa hoàn thành`;
}

document.getElementById("todo-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

render();