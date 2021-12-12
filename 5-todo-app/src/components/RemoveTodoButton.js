import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slices/todoSlice'

const RemoveTodoButton = ({ removeIndex }) => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => {
                dispatch(removeTodo(removeIndex))
        }}>
            Remove
        </button>
    )
}

export default RemoveTodoButton
