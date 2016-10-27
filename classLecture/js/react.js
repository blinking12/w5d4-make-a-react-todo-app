//Loading other libraries
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

window.renderView = (data) => {
    ReactDOM.render(
        <Posts data={data} />,//render can return or mount only 1 component
        document.getElementById('posts') //<=This has to be an ID
    )
}

renderView(posts)
