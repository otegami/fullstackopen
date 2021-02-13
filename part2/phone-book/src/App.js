import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '090-6716-6871' },
    { id: 2,name: 'Arto Hellas', number: '040-123456' },
    { id: 3,name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 4,name: 'Dan Abramov', number: '12-43-234345' },
    { id: 5,name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPersonObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }
  const personToShow = !searchName ? persons : persons.filter(person => person.name.includes(searchName))

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={searchName} onChange={handleSearchNameChange} />
      <h2>Add a new</h2>
        <PersonForm
          nameValue={newName}
          numberValue={newNumber}
          onNameChange={handleNameChange}
          onNumberChange={handleNumberChange}
          onClick={addPerson}
        />
      <h2>Numbers</h2>
        <Persons persons={personToShow}/>
    </div>
  )
}

export default App
