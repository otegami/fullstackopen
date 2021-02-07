import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (<button onClick={ onClick }>{ text }</button>)

const Display = ({text, counter}) => {
  if (text === "positive" && counter > 0) {
    return (
      <p>{ text }: { counter }%</p>
    )
  }

  return (
    <p>{ text }: { counter }</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => { 
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => { 
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => { 
    setBad(bad - 1)
    setAll(all + 1) 
  }

  const average = (good + neutral + bad) / 3
  const positivePercentage = good / all * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={ handleGoodClick } text="godd" />
      <Button onClick={ handleNeutralClick } text="neutral" />
      <Button onClick={ handleBadClick } text="bad" />
      <h2>statistics</h2>
      <Display text="good" counter={ good }/>
      <Display text="neutral" counter={ neutral }/>
      <Display text="bad" counter={ bad }/>
      <Display text="all" counter={ all }/>
      <Display text="average" counter={ average } />
      <Display text="positive" counter={ positivePercentage } />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
