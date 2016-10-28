import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

var todos = []
console.log(todos)

document.getElementById('textBox').addEventListener('keypress', enter);

document.getElementById('addBtn').addEventListener('click', addTodo);

var addTodo = function() {
    // 1. get todo input field
    var todoItem = document.getElementById('textBox').value

    // 2. push todoItem onto todos array
    todos.push(todoItem)

    // 3. clear out textBox value
    document.getElementById('textBox').value = ''

    // 4. call renderView(todos)
    renderView(todos)
}
// renderView(todos)

function enter(event) {
    if (event.key === 'Enter') {
        addTodo()
    }
}

var renderView = (data) => {
    console.log(data)
    ReactDOM.render(
        <Todos todos={data} />,//render can return or mount only 1 component
        document.getElementById('todos') //<=This has to be an ID
    )
}
