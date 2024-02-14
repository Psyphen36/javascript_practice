let arrList = [];

let inpTodoElement = document.querySelector('.js-inp-todo');
let dateInputElement = document.querySelector('.js-date');

inpTodoElement.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addList();
        renderTodoList();
    }
});

dateInputElement.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addList();
        renderTodoList();
    }
});

document.querySelector('.addList').addEventListener('click', addList);


function addList() {
    const inpName = inpTodoElement.value;
    const dueDate = dateInputElement.value;

    arrList.push({
        nameInput: inpName,
        date: dueDate});
    inpTodoElement.value = '';

    renderTodoList();
};

function renderTodoList() {
    let TodoListHTML = '';

    arrList.forEach((TodoObject) => {
        inpName = TodoObject.nameInput;
        inpDate = TodoObject.date;

        const html = `
        <div class="js-text-html js-display-todo">${inpName}</div>

        <div class="js-date-html js-display-todo">${inpDate}</div>

        <button class="js-delete-btn js-display-todo">Delete</button>`

        TodoListHTML += html
    });
    document.querySelector('.js-display-todo').innerHTML = TodoListHTML;

    document.querySelectorAll('.js-delete-btn').forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            removeHTML(index);
        })
    });
};

function removeHTML(i) {
    arrList.splice(i, 1);
    renderTodoList();
    };