import { useState } from 'react'
import {
  Routes, Route, Link,
  useNavigate, useMatch
} from "react-router-dom"
import  { useField } from './hooks/index'

// Menu
const Menu = ({ anecdotes, addNew }) => {
  const padding = {
    padding: 8,
    background: "#96daff",
    border: "2px solid #000"
  }

  const match = useMatch('/:id')
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null

  return (
    <>
      <div>
        <Link style={padding} to="/">Anecdotes</Link>
        <Link style={padding} to="/create">Create new</Link>
        <Link style={padding} to="/about">About</Link>
      </div>
      <div>
      <Routes>
        <Route path="/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </>
  )
}

// List of Anecdotes
const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => 
        <li key={anecdote.id} >
           <Link to={`/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      )}
    </ul>
  </div>
)

// Anecdote
const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h3>{anecdote.content}</h3>
      <h5>AUTHOR: {anecdote.author}</h5>
      <h5>URL: {anecdote.info}</h5>
      <h5>VOTES: {anecdote.votes}</h5>
    </div>
  )
}

// Create new anecdote
const CreateNew = (props) => {
  const { reset: resetContent, ...content } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetInfo, ...info } = useField('text')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
  }
  
  const handleReset = (e) => {
    e.preventDefault()
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content:
          <input {...content} /> 
        </div>
        <div>
          author:
          <input {...author} />
        </div>
        <div>
          url:
          <input {...info} />
        </div>
        <button type="submit" style={{ marginTop: 10, marginBottom: 15 }}>Create</button>
        <button style={{ marginTop: 10, marginBottom: 15 }} onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

// About
const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

// Footer
const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a> (Juha Hyvärinen 2022).

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

// App
const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification('New anecdote added')
    setTimeout(() => {
      setNotification('')
    }, 5000);
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>ANECDOTES APP</h1>
      <p style={{ backgroundColor: "green", color: "#FFF" }}>{notification}</p>
      <Menu anecdotes={anecdotes} addNew={addNew} />
      <Footer />
    </div>
  )
}

export default App