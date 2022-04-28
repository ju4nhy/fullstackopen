import { createSlice } from '@reduxjs/toolkit'

let timeoutId = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setMessage(state, action) {
            const notificationMsg = action.payload
            return notificationMsg
        },
    },
})

export const { setMessage } = notificationSlice.actions

export const setNotification = (message, seconds) => {
    return async (dispatch) => {
        clearTimeout(timeoutId)
        dispatch(setMessage(message))
        timeoutId = setTimeout(() => {
            dispatch(setMessage(null))
        }, seconds)
    }
}

export default notificationSlice.reducer
