import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todoSlice'
import { v4 as uuidv4 } from 'uuid';

const NewTodo = () => {
    const [newTodo, setNewTodo] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newTodo)
        dispatch(addTodo({
            id : uuidv4(),
            value : newTodo,
            isCompleted : false
        }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Create a new todo" value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} />
        </form>
    )
}

export default NewTodo
