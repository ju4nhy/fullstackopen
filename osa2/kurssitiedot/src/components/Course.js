import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div> 
    )
  }
  
  // Header huolehtii kurssin nimen renderöimisestä.
  const Header = ({ course }) => {
    return (
      <div>
          <h1 key={course.id}>{course.name}</h1> 
      </div>
    )
  }
  
  // Content tulostaa kurssin osista ja tehtävämääristä huolehtivan Part komponentin.
  const Content = ({ parts }) => {
    return (
      <div>
        <Part parts={parts}/>
      </div>
    )
  }
  
  // Part huolehtii osista ja tehtävämääristä
  const Part = ({ parts }) => {
    return (
      <div>
        <ul>
         {parts.map((part) =>
            <li key={part.id}>{part.name} {part.exercises}</li> 
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

  export default Course