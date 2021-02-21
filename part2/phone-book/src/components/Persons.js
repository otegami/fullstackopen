import React from 'react'
import Person from './Person'

const Persons = ({persons, handleClick}) => <ul>{persons.map(person => <Person key={person.id} person={person} handleClick={handleClick} />)}</ul>

export default Persons
