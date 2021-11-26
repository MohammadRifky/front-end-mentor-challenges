import React, { useState } from 'react'
import { connect } from 'react-redux'
const NewTodo = () => {
    const [newTodo, setNewTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newTodo)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Create a new todo" value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} />
        </form>
    )
}

export default NewTodo
