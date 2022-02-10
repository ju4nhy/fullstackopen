import React from 'react'

const Person = ({ person, deletePerson }) => {
    return(
          <div className='personContainer'>
            <label key={person.id}>{person.name} <b>{person.phone}</b></label>
            <button className="deleteContact" onClick={() => deletePerson(person.id, person.name)}>Delete</button>      
          </div>    
    ) 
  }

export default Person 

