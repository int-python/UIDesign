import React from 'react'
import Blog from './Blog'
import Client from './Client'
import Digital from './Digital'
import Total from './Total'
import Why from './Why'

function Body() {
    return (
        <div>
            <Digital />
            <Why />
            <Client />
            <Total />
            <Blog />
        </div>
    )
}

export default Body
