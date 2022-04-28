import { useState } from 'react'
import PropTypes from 'prop-types'
import * as Styled from '../styles'

const BlogForm = ({ createBlog }) => {
    const [newBlog, setNewBlog] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const addNewBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newBlog,
            author: author,
            url: url,
        })
        setNewBlog('')
        setAuthor('')
        setUrl('')
    }

    const handleBlogChange = (event) => {
        setNewBlog(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    return (
        <Styled.Form onSubmit={addNewBlog}>
            <h3>Create new blog</h3>
            Title:
            <Styled.Input
                id="title"
                type="text"
                placeholder="Add title"
                value={newBlog}
                onChange={handleBlogChange}
            />
            <br />
            Author:
            <Styled.Input
                id="author"
                type="text"
                placeholder="Add author"
                value={author}
                onChange={handleAuthorChange}
            />
            <br />
            URL:
            <Styled.Input
                id="url"
                type="text"
                placeholder="Add url"
                value={url}
                onChange={handleUrlChange}
            />
            <Styled.Button style={{ display: 'block' }} type="submit">
                Save
            </Styled.Button>
        </Styled.Form>
    )
}

BlogForm.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
}

export default BlogForm
