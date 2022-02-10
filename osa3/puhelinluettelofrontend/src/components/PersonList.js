import React from 'react'
import Person from './Person'

const PersonList = ({ persons, newFilter, deletePerson }) => {

  const filteredPersons = newFilter ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())) : persons

    return(
      <div>   
        <h4>Contact List</h4>   
        {filteredPersons.map(person => 
          <Person person={person} key={person.id} name={person.name} phone={person.phone} deletePerson={deletePerson}  />
        )}       
      </div>   
    ) 
}

export default PersonList