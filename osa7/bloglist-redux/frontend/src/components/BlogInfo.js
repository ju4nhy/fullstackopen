import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addVote, blogDelete, addComment } from '../reducers/blogsReducer'
import { setNotification } from '../reducers/notificationReducer'
import { convertTime } from '../helpers/customfunctions'
import * as Styled from '../styles'

const BlogInfo = ({ blogs, login }) => {
    const [comment, setComment] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const id = useParams().id
    const blog = blogs.find((blog) => blog.id === id)

    // Add Like
    const addLike = (id, title) => {
        dispatch(addVote(id))
            .then(dispatch(setNotification(`You voted '${title}'`, 5000)))
            .catch((error) => {
                dispatch(
                    setNotification(
                        'Error! Blog was already removed from the server.',
                        5000
                    )
                )
            })
    }

    // Add blog comment
    const addBlogComment = (id, comment) => {
        dispatch(addComment(id, comment))
            .then(dispatch(setNotification(`Added comment`, 5000)))
            .catch((error) => {
                dispatch(setNotification('Error! Adding comment failed', 5000))
            })
    }

    // Delete blog
    const deleteBlog = (id) => {
        const blogToDelete = blogs.find((blog) => blog.id === id)

        if (
            window.confirm(
                `Do you really want to delete ${blogToDelete.title} ?`
            )
        ) {
            if (login.username === blogToDelete.user.username) {
                dispatch(blogDelete(id)).then(
                    dispatch(
                        setNotification(
                            `Deleted blog '${blogToDelete.title}'`,
                            5000
                        ),
                        navigate('/blogs')
                    )
                )
            } else {
                dispatch(
                    setNotification(
                        'Error! You do not have permission to delete this blog',
                        5000
                    )
                )
            }
        }
    }

    // Handle change
    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    if (!blog) {
        return null
    }

    return (
        <Styled.InfoStyle>
            <Link to={'/blogs/'}>
                <Styled.CloseButton>Close</Styled.CloseButton>
            </Link>
            <h2 style={{ color: '#f5bf42' }}>{blog.title}</h2>
            <p>URL: {blog.url}</p>
            <p>
                Likes: {blog.likes}{' '}
                <Styled.Button onClick={() => addLike(blog.id, blog.title)}>
                    Like
                </Styled.Button>
            </p>
            <p>Added by {blog.author}</p>
            {blog.user && login.username === blog.user.username ? (
                <Styled.DeleteButton onClick={() => deleteBlog(blog.id)}>
                    Delete
                </Styled.DeleteButton>
            ) : null}
            <Styled.Comments>
                <div>
                    <h4>COMMENTS</h4>
                    <Styled.Input
                        type="text"
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <Styled.Button
                        onClick={() => addBlogComment(blog.id, comment)}
                    >
                        Add comment
                    </Styled.Button>
                    <ul>
                        {blog.comments.map((comm) => (
                            <li key={comm._id}>
                                {
                                    <b style={{ color: '#3dffe2' }}>
                                        {convertTime(comm.date)}
                                    </b>
                                }{' '}
                                {comm.comment}
                                <hr style={{ border: '0.5px solid' }}></hr>
                            </li>
                        ))}
                    </ul>
                </div>
            </Styled.Comments>
        </Styled.InfoStyle>
    )
}

export default BlogInfo
