import { Link, useParams } from 'react-router-dom'
import * as Styled from '../styles'

const UserInfo = ({ users }) => {
    const id = useParams().id
    const user = users.find((user) => user.id === id)

    if (!user) {
        return null
    }

    const userBlogs = user.blogs.map((blog) => (
        <li key={blog.id.toString()}>{blog.title}</li>
    ))

    return (
        <>
            <h1>List of Users</h1>
            <Styled.InfoStyle>
                <Link to={'/users/'}>
                    <Styled.CloseButton>Close</Styled.CloseButton>
                </Link>
                <h3 style={{ color: '#f5bf42' }}>
                    {user.name} alias {user.username}
                </h3>
                {userBlogs.length > 0 ? <h4>Added blogs</h4> : null}
                <ul>
                    {userBlogs.length === 0
                        ? 'No blogs found for this user'
                        : userBlogs}
                </ul>
            </Styled.InfoStyle>
        </>
    )
}

export default UserInfo
