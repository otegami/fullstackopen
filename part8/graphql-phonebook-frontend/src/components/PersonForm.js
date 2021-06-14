import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_PERSON = gql`
mutation createPerson ($name: String!, $street: String!, $city: String!, $phone: String!) {
  addPerson(
    name: $name
    street: $street
    city: $city
    phone: $phone
  ){
    name
    phone
    id
    address {
      street
      city
    }
  }
}
`

