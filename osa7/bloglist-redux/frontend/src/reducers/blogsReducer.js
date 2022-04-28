import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { initializeUsers } from '../reducers/usersReducer'

const blogSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        appendBlog(state, action) {
            state.push(action.payload)
        },
        setBlogs(state, action) {
            return action.payload
        },
    },
})

export const { appendBlog, setBlogs } = blogSlice.actions

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()
        dispatch(setBlogs(blogs))
    }
}

export const createBlog = (content) => {
    return async (dispatch) => {
        const newBlog = await blogService.create(content)
        dispatch(appendBlog(newBlog))
        dispatch(initializeUsers())
        dispatch(initializeBlogs())
    }
}

export const addVote = (id) => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()
        const blogToUpdate = blogs.find((blog) => blog.id === id)
        const updatedBlog = {
            ...blogToUpdate,
            likes: blogToUpdate.likes + 1,
        }
        const result = await blogService.updateBlog(id, updatedBlog)
        dispatch(initializeBlogs())
        dispatch(initializeUsers())
    }
}

export const addComment = (id, comment) => {
    return async (dispatch) => {
        await blogService.createComment(id, comment)
        dispatch(initializeBlogs())
        dispatch(initializeUsers())
    }
}

export const blogDelete = (id) => {
    return async (dispatch) => {
        await blogService.forcedelete(id)
        dispatch(initializeBlogs())
        dispatch(initializeUsers())
    }
}

export default blogSlice.reducer
