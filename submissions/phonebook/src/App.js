import React, { useState } from 'react'

const Person  = (props) => {
  console.log("person  props", props)
  return(
    <div>
      <p>{props.person.name} {props.person.number}</p>
    </div>
    
    )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'999' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('add button clicked', event.target)

    //checking for existing user
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
    //console.log("existing", existingPerson)

    //alert and stop if existing
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }

    const nameObject = {
      name: newName ,
      number: newNumber
    }

    //adding new person to the list
    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log('persons list', persons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: 
            <input 
              value={newName} 
              onChange={handleNameChange}
              />
       </div>
       <div>
        number: 
            <input 
              value={newNumber} 
              onChange={handleNumberChange}
              />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map(persons => 
            <Person key={persons.id} person={persons} />
          )}
      </div>
      <div>debug: {newName}</div>
    </div>

  )
}

export default App
