import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/slices/themeSlice'

const ToggleThemeButton = () => {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.theme.isDark)
    return (
        <>
            <button onClick={()=> {
                dispatch(toggleTheme())
            }}>Toggle</button>
            {` ${isDark} `}
        </>
    )
}

export default ToggleThemeButton
