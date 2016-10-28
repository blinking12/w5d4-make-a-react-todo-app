import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

var todos = []  //this is a global variable
console.log(todos)  //This is where I'm logging the global variable to make sure it works

// Here is where I added keypress event listener, using an id.
document.getElementById('textBox').addEventListener('keypress', enter);

//Here is where I added click event listener, using an id
document.getElementById('addBtn').addEventListener('click', addTodo);

var addTodo = function() {
    // 1. get todo input field
    var todoItem = document.getElementById('textBox').value

    // 2. push todoItem onto todos array, pushes to the end.
    todos.push(todoItem)

    // 3. clear out textBox value
    document.getElementById('textBox').value = ''

    // 4. call renderView(todos) and pass in the array, render as a visual form.
    renderView(todos)
}


//this is how I made the enter key work on the input
function enter(event) {
    if (event.key === 'Enter') {
        addTodo()
    }
}
//This is my render function, it will add items out to my page.
var renderView = (data) => {
    console.log(data)
    ReactDOM.render(  //relates to the import up top
        <Todos todos={data} />,//render can return or mount only 1 component
        document.getElementById('todos') //<=This is where I will mount the data
    )
}
