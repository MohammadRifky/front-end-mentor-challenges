import React from 'react'
import ToggleCompleteButton from "./ToggleCompleteButton"
import RemoveTodoButton from './RemoveTodoButton'
import { useSelector } from 'react-redux'
const Todo = ( {todoIndex} ) => {
    const todo = useSelector(state => state.todos.todos[todoIndex])
    return (
        <div id={todo.key} className='flex justify-around'>
            <ToggleCompleteButton toggleIndex = {todoIndex} />
            <span className={ (todo.isCompleted ? 'line-through' : '') }>
                {todo.value}
            </span>
            <RemoveTodoButton removeIndex = {todoIndex} />
        </div>
    )
}

export default Todo
