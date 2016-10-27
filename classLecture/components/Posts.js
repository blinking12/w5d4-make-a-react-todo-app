import React, { Component } from 'react'
import Post from './Post'

const Posts = (props) => {
    const PostItems = props.data.map((post, i) => {
        return <Post post={post} key={i} /> //key needs to be done each time
    })

    //can on return one thing/node
    return <div>
        <h1>Blog Posts </h1>
        {PostItems}
    </div>
}

export default Posts
