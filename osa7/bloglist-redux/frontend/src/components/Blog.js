import { Link } from 'react-router-dom'
import BlogInfo from '../components/BlogInfo'
import * as Styled from '../styles'

const Blog = ({ blogs, blog }) => {
    return (
        <Styled.BlogStyle>
            <Link
                to={`/blogs/${blog.id}`}
                style={{ color: '#f5bf42' }}
                element={<BlogInfo blogs={blogs} />}
            >
                {' '}
                <p>{blog.title}</p>{' '}
                <p style={{ fontSize: 11 }}> written by {blog.author}</p>
            </Link>
        </Styled.BlogStyle>
    )
}

export default Blog
