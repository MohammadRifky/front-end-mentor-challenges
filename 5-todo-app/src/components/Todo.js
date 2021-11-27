import React from 'react'

const Todo = ( {id , value} ) => {
    return (
        <div id={id}>
            {value}
        </div>
    )
}

export default Todo
