import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      const filter = action.payload
      return filter
    },
    removeFilter(state, action) {
      document.getElementById('listfilter').value = ''
      const filter = ''
      return filter
    }
  }
})

export const { setFilter, removeFilter } = filterSlice.actions
export default filterSlice.reducer

