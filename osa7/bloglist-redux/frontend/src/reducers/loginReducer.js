import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

const loginSlice = createSlice({
    name: 'login',
    initialState: null,
    reducers: {
        setUser(state, action) {
            const user = action.payload
            return user
        },
        setToken(state, action) {
            const token = action.payload
            return token
        },
    },
})

export const { setUser, setToken } = loginSlice.actions

export const loginUser = (username, password) => {
    return async (dispatch) => {
        const user = await loginService.login({ username, password })
        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        dispatch(setToken(user.token))
        dispatch(setUser(user))
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        window.localStorage.clear()
        dispatch(setUser(null))
    }
}

export const checkLocalstore = () => {
    return async (dispatch) => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            dispatch(setToken(user.token))
            dispatch(setUser(user))
        }
    }
}

export default loginSlice.reducer
