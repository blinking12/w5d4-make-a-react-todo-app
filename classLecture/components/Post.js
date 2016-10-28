import React, { Component } from 'react'


const TodoItem = (props) => <div className="post">
    <img src={props.post.image} alt={props.post.title}/>
    <h1>{props.post.title}</h1>
    <p className="lead">
        Published On {props.post.date} at {props.post.time}
    </p>
    <p>
        {props.post.body}
    </p>
    <span className="small">Author: {props.post.author}</span>
</div>

export default Post
