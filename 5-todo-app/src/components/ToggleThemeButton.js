import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/slices/themeSlice'
import { ReactComponent as SunIcon } from '../images/icon-sun.svg'
import { ReactComponent as MoonIcon } from '../images/icon-moon.svg'
const ToggleThemeButton = () => {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.theme.isDark)
    return (
        <>
            {
                isDark 
                ? <SunIcon onClick={()=> {
                        dispatch(toggleTheme()) 
                    }} /> 
                : <MoonIcon onClick={()=> {
                        dispatch(toggleTheme()) 
                    }}/>
            }
        </>
    )
}

export default ToggleThemeButton
