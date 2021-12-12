import { createSlice } from '@reduxjs/toolkit'

export const todoFilterSlice = createSlice({
  name: 'todoFilter',
  initialState : {
    value: 'ALL'
  },
  reducers: {
    toggleFilter: ( state , action ) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleFilter } = todoFilterSlice.actions

export default todoFilterSlice.reducer