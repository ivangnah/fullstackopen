import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll ] = useState(false)
  const [searchTerm, setSearchTerm ] = useState('')
  
  //partial match search
  const personsToShow = showAll
    ? persons
    : persons.filter(person =>
    //person.name === searchTerm )
      person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    
    )
  
  
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
      number: newNumber ,
      id: persons.length + 1,
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
        <Filter value={searchTerm} onChange = {handleSearchTermChange} />
      
      <h3> Add a new Name</h3> 
       <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      
      <h2>Numbers</h2>
      <form onSubmit = {setShowAll}>
        <button type="submit">Show All</button>
        </form>
        <div>
          {personsToShow.map(persons => 
            <Person key={persons.id} person={persons} />
          )}
      </div>
    </div>

  )
}

export default App
