import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonList from './components/PersonList'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'

// Tilat
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNum, setNewPhoneNum ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)
 
// Hae data
useEffect(() => {
  personService
    .getAll()
    .then(allPersons => {
      setPersons(allPersons)
   })
}, [])

// Lisää kontakti puhelinluetteloon
const addPerson = (event) => {
  event.preventDefault()
  if (persons.map(person => person.name).includes(newName)) {
    updatePerson()
  } else {
      const person = {
        name: newName, 
        phone: newPhoneNum
      }    
        personService
          .create(person)
          .then(createdPerson => {
              if (createdPerson.name.length >= 3 && createdPerson.phone.length >= 8) { 
                setNotificationMessage(`Added new contact ${newName}`)
                setTimeout(() => {
                  setNotificationMessage(null)
                }, 3000)
              }
              setPersons(persons.concat(createdPerson))
              resetInputs()
          }) 
          .catch(error => {
            setErrorMessage(`${error.response.data.error}`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
      }
}

// Päivitä kontaktin tiedot
const updatePerson = () => {
  if (window.confirm(`${newName} is already added to phonebook. Replace the old phone number with a new one?`)) {
    const person = persons.find(p => p.name === newName)
    const updatedPerson = {...person, phone: newPhoneNum}
    personService
      .update(updatedPerson.id, updatedPerson)
      .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
            personService
                .getAll()
                .then(allPersons => {
                  setPersons(allPersons)
            })
            resetInputs()
            setNotificationMessage(`Phone number updated for contact: ${newName}`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 3000)
      })
      .catch(error => {
        setErrorMessage(`Contact not found. ${newName} has already been removed from the server.`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })  
  }  
}

// Poista kontakti puhelinluettelosta
const deletePerson = (id, name) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      personService
        .forcedelete(id)
        .then(() => {
          setNotificationMessage(`${name} deleted`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 3000)
            personService
              .getAll()
              .then(allPersons => {
                setPersons(allPersons)
              })
        })  
    }   
}

// Tyhjennä kentät
const resetInputs = () => {
  setNewName('')
  setNewPhoneNum('')
  setNewFilter('')
}

const handleNameChange = (event) => {
  setNewName(event.target.value)
}
const handlePhoneNumChange = (event) => {
  setNewPhoneNum(event.target.value)
}
const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}

return (
  <div>
      <h3>PHONEBOOK</h3>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <Notification message={notificationMessage} />
      <Notification message={errorMessage} errorMessage={errorMessage} />
      <PersonForm newName={newName} 
                  newPhoneNum={newPhoneNum} 
                  handleNameChange={handleNameChange} 
                  handlePhoneNumChange={handlePhoneNumChange} 
                  addPerson={addPerson}
      />
      <PersonList persons={persons} newFilter={newFilter} deletePerson={deletePerson} />
  </div>
  )
}

export default App