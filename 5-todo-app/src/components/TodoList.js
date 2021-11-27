import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    return (
        <div>
        { todos.map((todo, index) => (
            <Todo key={index} id={todo.id} value={todo.value} />
        ))}
        </div>
    )
}

export default TodoList
