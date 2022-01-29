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
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll ] = useState(true)
  const [searchTerm, setSearchTerm ] = useState('')

  
  //search works now for perfect match. next thing to do is partial match
  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name === searchTerm )
  
  
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

  const showAllNames = (event) => {
    event.preventDefault()
    console.log('reset button clicked', event.target)
    setShowAll(true)
  }

  //event handler for name change
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  //event handler for number change
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  //event handler for search term change
  const handleSearchTermChange = (event) => {
    console.log('search term', event.target.value)
    setSearchTerm(event.target.value)
    setShowAll(false)
    console.log('search term 2', searchTerm)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with 
      <input
        value={searchTerm}
        onChange = {handleSearchTermChange}
        />
      <form onSubmit={addName} >
        <div>
          <h2> Add a new Name</h2> 
          Name: 
            <input 
              value={newName} 
              onChange={handleNameChange}
              />
       </div>
       <div>
          Phone Number: 
              <input 
                value={newNumber} 
                onChange={handleNumberChange}
                />
          </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <form onSubmit = {setShowAll}>
        <button type="submit">Show All</button>
        </form>
        <div>
          {personsToShow.map(persons => 
            <Person key={persons.id} person={persons} />
          )}
      </div>
      <div>debug: {newName}</div>
    </div>

  )
}

export default App
