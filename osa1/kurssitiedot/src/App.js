import React from 'react'

// Header huolehtii kurssin nimestä
const Header = ({ course }) => {
  return (
    <div>
        <h1>{course}</h1>
    </div>
  )
}

// Content huolehtii osista
const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts} />
    </div>
  )
}

// Part huolehtii osista ja tehtävämääristä
const Part = ({ parts }) => {
    return (
      <div>
        <ul>
         {parts.map((item) =>
            <li key={item.id}>{item.name} {item.exercises}</li> 
         )}
        </ul>
      </div>
  )
}

// Total huolehtii tehtävien yhteismäärästä.
const Total = ({ parts }) => {
    const total = parts.reduce( (s, p) => {
        return s + p.exercises
    }, 0) 
  return (
    <div>
      <p>Total {total} of exercises</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div> 
  )
}

export default App