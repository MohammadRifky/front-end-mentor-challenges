import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState : {
        isDark: false,
    },
    reducers: {
      toggleTheme : () => {
          state.theme.isDark = !state.theme.isDark
      }
    }
  },
)

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer