import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_PERSONS } from './queries'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import PhoneForm from './components/PhoneForm'

const App = () => {
  const [token, setToken] = useState(null)
  const [errorMessage, setErrormessage] = useState(null)

  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>loading...</div>
  }

  const notify = (message) => {
    setErrormessage(message)
    setTimeout(() => {
      setErrormessage(null)
    }, 10000)
  }

  if (!token) {
    return (
      <div>
        <Notify errorMessage={errorMessage} />
        <h2>Login</h2>
        <LoginForm
          setToken={setToken}
          setError={notify}
        >
        </LoginForm>
      </div>
    )
  }

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <Persons persons = {result.data.allPersons}/>
      <PersonForm setError={notify}/>
      <PhoneForm setError={notify} />
    </div>
  )
}

const Notify = ({errorMessage}) => {
  if ( !errorMessage ) {
    return null
  }

  return (
    <div style={{color: 'red'}}>
      {errorMessage}
    </div>
  )
}

export default App
