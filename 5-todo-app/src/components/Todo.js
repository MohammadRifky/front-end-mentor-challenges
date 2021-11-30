import React from 'react'
import ToggleCompleteButton from "./ToggleCompleteButton"
import { useSelector } from 'react-redux'
const Todo = ( {todoIndex} ) => {
    const todo = useSelector(state => state.todos.todos[todoIndex])
    return (
        <div id={todo.key}>
            <ToggleCompleteButton toggleIndex = {todoIndex} />
            <span className={ (todo.isCompleted ? 'line-through' : '') }>
                {todo.value}
            </span>
        </div>
    )
}

export default Todo
