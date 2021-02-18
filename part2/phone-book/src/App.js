import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')

  useEffect(() => {
    const eventPersonHandler = response => {
      setPersons(response.data)
    }
    const promise = axios.get("http://localhost:3001/persons")
    promise.then(eventPersonHandler)
  }, [])

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
