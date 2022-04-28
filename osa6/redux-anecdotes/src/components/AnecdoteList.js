import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const listStyle = {
    padding: "25px",
    color: "#FFF",
    background: "#7C130B"
  }
  const anotherStyle = {
    marginBottom: "15px",
  }

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(addVote(id))
    dispatch(setNotification(`You voted '${content}'`, 5000))
  }

  // Sort by votes and filter if needed
  const sortedAnecdotes = [...anecdotes].filter(a => a.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1).sort((a, b) => b.votes - a.votes)

  return (
      <div style={listStyle}>
        {sortedAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div style={anotherStyle}>
              has {anecdote.votes}
              <button style={{ backgroundColor: "#00ff3c", marginLeft: "5px"}} onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
            <hr style={{ backgroundColor: "#c0fafc", height: "1px"}} />
          </div>
        )}
     </div>
  )
}

export default AnecdoteList

