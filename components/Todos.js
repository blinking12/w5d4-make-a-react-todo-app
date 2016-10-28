import React, { Component } from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
    const TodoItems = props.todos.map((todo, i) => {
        return <TodoItem todo={todo} key={i} />
    })
    return <div>
        {TodoItems}
    </div>
}

export default Todos

    // Create a stateless component named Todos that takes props.todos and maps it to a new array of TodoItem components called var items, each receiving a prop named item set to the current item in the map. Remember to put key={i} onto each component that corresponds to the current map index. You'll do this in the render() method.

    // In that same render method, return the new items variable that the map function made. Make sure you use JSX tags around the items variable.
