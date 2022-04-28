import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useMatch, useNavigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Blog from './components/Blog'
import BlogInfo from './components/BlogInfo'
import User from './components/User'
import UserInfo from './components/UserInfo'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { logoutUser, checkLocalstore } from './reducers/loginReducer'
import { initializeBlogs, createBlog } from './reducers/blogsReducer'
import { initializeUsers } from './reducers/usersReducer'
import { setNotification } from './reducers/notificationReducer'
import { showDate, changeTitleBasedOnView } from './helpers/customfunctions'
import * as Styled from './styles'

const App = () => {
    const [titleToShow, setTitleToShow] = useState('')

    const login = useSelector((state) => state.login)
    const blogs = useSelector((state) => state.blogs)
    const users = useSelector((state) => state.users)
    const message = useSelector((state) => state.notification)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const blogFormRef = useRef()
    const matchHome = useMatch('/')
    const matchBlogs = useMatch('/blogs')
    const matchBlogPage = useMatch('/blogs/:id')

    useEffect(() => {
        dispatch(initializeBlogs())
        dispatch(initializeUsers())
        dispatch(checkLocalstore())
    }, [dispatch])

    useEffect(() => {
        changeTitleBasedOnView(matchBlogs, matchBlogPage, setTitleToShow)
    }, [matchBlogs, matchBlogPage])

    // Add Blog
    const addBlog = (blogObject) => {
        blogFormRef.current.toggleVisibility()
        checkFormFields(blogObject)
        dispatch(createBlog(blogObject))
    }

    // Check Form Fields
    const checkFormFields = (blogObject) => {
        blogObject.title.length > 0 &&
        blogObject.author.length > 0 &&
        blogObject.url.length > 0
            ? dispatch(
                  setNotification(`Added new blog '${blogObject.title}'`, 5000)
              )
            : dispatch(
                  setNotification(
                      'Error! Cannot add blog. Title, author or url is missing.',
                      5000
                  )
              )
    }

    // Sort Blogs by Likes
    const sortedBlogs = [...blogs].sort((a, b) => {
        return b.likes - a.likes
    })

    // Log Out
    const handleLogout = () => {
        dispatch(logoutUser()).then(navigate('/'))
        dispatch(setNotification('Logged out', 2000))
    }

    return (
        <>
            <Styled.GlobalStyle />
            <Styled.Container>
                <Notification message={message} />
                {login === null || window.localStorage.length === 0 ? (
                    <>
                        <h1>Blogs App</h1>
                        <Togglable buttonLabel="Log in">
                            <LoginForm />
                        </Togglable>
                    </>
                ) : (
                    <>
                        <Styled.Navigation>
                            <Styled.StyledLink to="/">HOME</Styled.StyledLink>
                            <Styled.StyledLink to="/blogs">
                                BLOGS
                            </Styled.StyledLink>
                            <Styled.StyledLink to="/users">
                                USERS
                            </Styled.StyledLink>{' '}
                            <p
                                style={{
                                    display: 'inline',
                                    marginLeft: 50,
                                    fontSize: 14,
                                }}
                            >
                                Today is {showDate()}
                            </p>
                        </Styled.Navigation>

                        <Styled.Toolbar>
                            <h1>Blogs App</h1>
                            <p>
                                <b style={{ color: '#00ff99' }}>
                                    {login.username}
                                </b>{' '}
                                logged in
                            </p>
                            <Styled.Button onClick={() => handleLogout()}>
                                Log out
                            </Styled.Button>

                            <Togglable buttonLabel="New blog" ref={blogFormRef}>
                                <BlogForm createBlog={addBlog} blogs={blogs} />
                            </Togglable>
                        </Styled.Toolbar>

                        <Styled.ContentArea>
                            <h1 id="titleToShow">
                                {' '}
                                {!matchHome ? titleToShow : <></>}
                            </h1>

                            <Routes>
                                <Route path="/" element={<></>} />
                                <Route
                                    path="/blogs"
                                    element={sortedBlogs.map((blog, i) => (
                                        <Blog
                                            key={blog.id}
                                            blogs={blogs}
                                            blog={blog}
                                        />
                                    ))}
                                />
                                <Route
                                    path="/users"
                                    element={<User users={users} />}
                                />
                                <Route
                                    path="/users/:id"
                                    element={<UserInfo users={users} />}
                                />
                                <Route
                                    path="/blogs/:id"
                                    element={
                                        <BlogInfo blogs={blogs} login={login} />
                                    }
                                />
                            </Routes>
                        </Styled.ContentArea>
                    </>
                )}
            </Styled.Container>
        </>
    )
}

export default App
