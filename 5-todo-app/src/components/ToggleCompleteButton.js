import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleted } from '../redux/slices/todoSlice'

const ToggleCompleteButton = ({toggleIndex}) => {
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => {
                console.log("clicked")
                dispatch(toggleCompleted(toggleIndex))
            }   
            }>Complete</button>
        </>
    )
}

export default ToggleCompleteButton
