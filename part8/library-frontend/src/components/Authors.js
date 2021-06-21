import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import Select from 'react-select';

import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'

const Authors = ({ show, setError }) => {
  const result = useQuery(ALL_AUTHORS)

  if (!show) {
    return null
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  const authors = result.data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <SetBirthYear authors={authors} setError={setError} />
    </div>
  )
}

const SetBirthYear = ({ authors, setError }) => {
  const [selectedName, setSelectedName] = useState('')
  const [born, setBorn] = useState('')

  const options = authors.map(author => ({value: author.name, label: author.name }))

  const [ updateAuthor ] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [ { query: ALL_AUTHORS } ],
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }
  })

  const submit = (event) => {
    event.preventDefault()

    updateAuthor({ variables: { name: selectedName.value, born } })

    setSelectedName('')
    setBorn('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <Select
          defaultValue-={selectedName}
          onChange={setSelectedName}
          options={options}
        />
        <div>
          year
          <input
            value={born}
            onChange={({ target }) => setBorn(Number(target.value))}
          />
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Authors
