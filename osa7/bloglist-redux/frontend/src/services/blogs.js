import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const create = async (newObject) => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUserJSON)

    const config = {
        headers: { Authorization: `bearer ${user.token}` },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const createComment = (id, comment) => {
    const request = axios.post(`${baseUrl}/${id}/comments`, { comment })
    return request.then((response) => response.data)
}

const updateBlog = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then((response) => response.data)
}

const forcedelete = async (id) => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUserJSON)

    const config = {
        headers: { Authorization: `bearer ${user.token}` },
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

export default {
    getAll,
    create,
    updateBlog,
    forcedelete,
    createComment,
}
