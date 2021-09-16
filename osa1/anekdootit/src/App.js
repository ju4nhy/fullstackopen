import React, { useState, useEffect } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState('')
  const [maxVotes, setMaxVotes] = useState(0)

  useEffect(() => getMostVotedAnecdote())

  // Show random anecdote
  const nextRandomAnecdote = () => {
    const anecdote = anecdotes[Math.floor(Math.random() * anecdotes.length)]
    const anecdoteIndex = anecdotes.indexOf(anecdote)
    setSelected(anecdoteIndex)
  }

  // Vote anecdote
  const voteAnecdote = () => {
    const voteList = [...votes]
    voteList[selected] += 1
    setVotes(voteList)
  }

  // Get most voted anecdote
  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max.apply(null, votes)
    const mostVotedIndex = votes.indexOf(maxVotes)
    const mostVotedAnecdote = anecdotes[mostVotedIndex]
    setMaxVotes(maxVotes)
    setMostVotedAnecdote(mostVotedAnecdote)
  }

  return (
      <div>
        <h1>Päivän anekdootti</h1>
        {anecdotes[selected]}
        <p><b>{votes[selected]}</b> ääntä</p> 
        <button onClick={voteAnecdote}>Äänestä</button>
        <button onClick={nextRandomAnecdote}>Seuraava anekdootti</button>
        <h1>Eniten ääniä saanut anekdootti</h1>
        {mostVotedAnecdote}
        <p>yhteensä <b>{maxVotes}</b> äänellä</p>
    </div>
    )
}

export default App