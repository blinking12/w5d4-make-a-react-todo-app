import React, { Component } from 'react'

const TodoItems = (props) => <div className="checkbox">
    <label><input type="checkbox" value=""/>{props.todo}</label>
</div>

export default TodoItems

// Make another stateless component called TodoItem that takes the incoming props.item and returns it with JSX formatting.
