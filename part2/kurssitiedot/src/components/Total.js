import React from 'react'

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p>Total of exercises { sum }</p>
  )
}

export default Total
