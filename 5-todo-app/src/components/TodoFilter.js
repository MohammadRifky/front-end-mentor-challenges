import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFilter } from '../redux/slices/todoFilterSlice'

const TodoFilters = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(toggleFilter("ALL"))
            }}>
                All
            </button>
            <button onClick={() => {
                dispatch(toggleFilter("ACTIVE"))
            }}>
                Active
            </button>
            <button onClick={() => {
                dispatch(toggleFilter("COMPLETED"))
            }}>
                Completed
            </button>
        </div>
    )
}

export const getTodosToDisplay = ( todos, filter ) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(todo => !todo.isCompleted );
    case 'COMPLETED':
      return todos.filter( todo => todo.isCompleted );
  }
}

export default TodoFilters
