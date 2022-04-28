import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'
import * as Styled from '../styles'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
        event.preventDefault()
        dispatch(loginUser(username, password))
            .then(
                dispatch(
                    setNotification(`Welcome to Blogs App, ${username}`, 5000)
                )
            )
            .catch((error) => {
                dispatch(
                    setNotification('Error! Wrong username or password', 5000)
                )
            })
    }

    return (
        <Styled.Form onSubmit={handleLogin}>
            <h3>Log in</h3>
            <label>Username</label>
            <Styled.Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                name="username"
                onChange={({ target }) => setUsername(target.value)}
            />
            <label>Password</label>
            <Styled.Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                name="password"
                onChange={({ target }) => setPassword(target.value)}
            />
            <Styled.Button style={{ display: 'block' }}>Log in</Styled.Button>
        </Styled.Form>
    )
}

export default LoginForm
