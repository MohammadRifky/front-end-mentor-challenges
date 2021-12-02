import React, { useState } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const [todosToDisplay, setTodosToDisplay] = useState(todos)
    const getActiveTodos = () => todos.filter(todo => 
        todo.isCompleted !== true)
    const getCompletedTodos = () => todos.filter(todo => 
        todo.isCompleted !== false)
    return (
        <div>
            { todosToDisplay.map((todo, index) => (
                <Todo key={todo.id} todoIndex={index}  />
            ))}
            <div>
                <span>{todosToDisplay.length} items left</span>
                <button onClick={()=> setTodosToDisplay(todos) }>
                    All
                </button>
                <button onClick={()=> setTodosToDisplay(getActiveTodos()) }>
                    Active
                </button>
                <button onClick={()=> setTodosToDisplay(getCompletedTodos)}>
                    Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList
