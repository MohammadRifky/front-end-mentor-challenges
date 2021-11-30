import React, { useState } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
const TodoList = () => {
    const [filter, setFilter] = useState("")
    const todos = useSelector((state) => state.todos.todos)

    const getActiveTodos = () => todos.filter(todo => 
        todo.isCompleted !== true)
    const getCompletedTodos = () => todos.filter(todo => 
        todo.isCompleted !== false)
    let todosToDisplay = []
    switch(filter){
        case "ACTIVE":
            todosToDisplay = getActiveTodos()
        case "COMPLETED":
            todosToDisplay = getCompletedTodos()
        default:
            todosToDisplay = todos
    }
    // const todosToDisplay = 
    //     filter === "ACTIVE" 
    //     ? getActiveTodos()
    //     ? ""
    return (
        <div>
            { todosToDisplay.map((todo, index) => (
                <Todo key={todo.id} todoIndex={index}  />
            ))}
            <div>
                <li>
                    <button onClick={()=> setFilter("ALL") }>
                        All
                    </button>
                    <button onClick={()=> setFilter("ACTIVE")}>
                        Active
                    </button>
                    <button onClick={()=> setFilter("COMPLETED")}>
                        Completed
                    </button>
                </li>
            </div>
        </div>
    )
}

export default TodoList
