import React, { useState, useEffect } from 'react'
import personService from './services/person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')

  useEffect(() => {
    personService.getAll().then(response => setPersons(response))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName)

    if (person === undefined) {
      const newPersonObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      personService.create(newPersonObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatePersonObject = { ...person, number: newNumber }
        personService.update(person.id, updatePersonObject)
          .then(retrunedPerson => setPersons(persons.map(person => person.name === newName ? retrunedPerson : person)))
      }
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
  const handleDeletePersonClick = (event) => {
    event.preventDefault()
    const personId = Number(event.target.value)
    const person = persons.find(person => person.id === personId)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.destroy(personId)
      setPersons(persons.filter(person => person.id !== personId))
    }
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
        <Persons persons={personToShow} handleClick={handleDeletePersonClick} />
    </div>
  )
}

export default App
