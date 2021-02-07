// selectors
document.querySelector('form').addEventListener('submit', submitForm);
document.querySelector("ul").addEventListener('click', checkDelete )

function submitForm(e) {
    e.preventDefault();
    let input = document.querySelector("input");
    if(input.value !== '') {
        addTodo(input.value);
    }
    input.value = ""
}

function addTodo(todo) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `
        <p>${todo}</p>
        <button name="deleteButton" type="submit" class="btn btn__delete">🗑</button>
    `;
    li.classList.add('list__item');
    ul.appendChild(li);
}

function checkDelete(e) {
    if(e.target.name === 'deleteButton'){
        deleteTodo(e);
    }
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}