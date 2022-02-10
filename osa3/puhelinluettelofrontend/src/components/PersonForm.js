import React from 'react'

const PersonForm = ({ newName, newPhoneNum, handleNameChange, handlePhoneNumChange, addPerson }) => {
    return (
        <div>
            <h4>Add contact</h4>
            <form className='container'>
                <label>name: </label> 
                <input value={newName} onChange={handleNameChange} />
                <label>phone: </label>
                <input value={newPhoneNum} onChange={handlePhoneNumChange} />
                <div><button className="addContact" type="submit" onClick={addPerson}>Add</button></div>
            </form>
        </div>
    )
}

export default PersonForm