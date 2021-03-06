import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const style = {
    maxWidth: "650px"
  }

  const dispatch = useDispatch()
  
  useEffect(() => {
     dispatch(initializeAnecdotes()) 
  }, [dispatch]) 

  return (
    <div style={style}>
      <AnecdoteForm />
      <Notification />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App