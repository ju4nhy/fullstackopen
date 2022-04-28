
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const formStyle = {
    background: "#5E0700",
    padding: "25px",
    paddingTop: "5px",
    color: "#FFF",
  }

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(`New anecdote created: '${content}'`, 5000)
  }

  return (
    <div style={formStyle}>
      <h1>Anecdotes</h1>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input style={{ padding: "5px" }} name="anecdote" /></div>
        <button style={{ backgroundColor: "#00ff3c", padding: "5px", marginTop: "5px" }}>Create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm









