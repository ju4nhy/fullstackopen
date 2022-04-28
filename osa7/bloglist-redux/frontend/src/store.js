import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import blogsReducer from './reducers/blogsReducer'
import usersReducer from './reducers/usersReducer'
import loginReducer from './reducers/loginReducer'

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
        notification: notificationReducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
