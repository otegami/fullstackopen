import React, { useState, useEffect } from 'react'
import personService from './services/person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')
  const [ message, setMessage ] = useState(null)

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
          setMessage(`Added ${response.name}`)
        })
        .catch()
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatePersonObject = { ...person, number: newNumber }
        personService.update(person.id, updatePersonObject)
          .then(retrunedPerson => {
            setPersons(persons.map(person => person.name === newName ? retrunedPerson : person))
            setMessage(`Changed ${retrunedPerson.name}'s number!`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
          })
          .catch(error => {
            setMessage(`Information of ${updatePersonObject.name} has already been removed from server`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
          })
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
        <Notification message={message} />
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
