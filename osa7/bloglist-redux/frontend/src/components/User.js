import { Link } from 'react-router-dom'
import * as Styled from '../styles'

const User = ({ users }) => {
    return (
        <Styled.UserList>
            <h1>List of Users</h1>
            <table style={{ background: '#011c47', fontSize: 16 }}>
                <thead>
                    <tr style={{ background: '#000033' }}>
                        <td>User</td>
                        <td>Blogs created</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={user.id}>
                            <td>
                                {' '}
                                <Link
                                    to={`/users/${user.id}`}
                                    style={{
                                        color: '#f5bf42',
                                    }}
                                >
                                    {user.username}
                                </Link>
                            </td>
                            <td>{user.blogs.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Styled.UserList>
    )
}

export default User
