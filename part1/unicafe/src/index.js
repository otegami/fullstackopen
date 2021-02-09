import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (<button onClick={ onClick }>{ text }</button>)

const Statistic = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{ text }</td>
        <td>{ value }%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{ text }</td>
      <td>{ value }</td>
    </tr>
  )
}

const Statistics = ({ statistics }) => {
  const average = (statistics.good - statistics.bad) / 3
  const positivePercentage = statistics.good / statistics.all * 100

  if (statistics.all > 0)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Item</td>
              <td>value</td>
            </tr>
          </thead>
          <tbody>
            <Statistic text="good" value={ statistics.good }/>
            <Statistic text="neutral" value={ statistics.neutral }/>
            <Statistic text="bad" value={ statistics.bad }/>
            <Statistic text="all" value={ statistics.all }/>
            <Statistic text="average" value={ average } />
            <Statistic text="positive" value={ positivePercentage } />
          </tbody>
        </table>
      </div>
    )
  return (
    <div>
      <p>
        No feedback given
      </p>
    </div>
  )
}

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  })

  const handleGoodClick = () => { 
    setStatistics({
      ...statistics,
      good: statistics.good + 1,
      all: statistics.all + 1
    })
  }

  const handleNeutralClick = () => {
    setStatistics({
      ...statistics,
      neutral: statistics.neutral + 1,
      all: statistics.all + 1
    })
  }
  const handleBadClick = () => {
    setStatistics({
      ...statistics,
      bad: statistics.bad + 1,
      all: statistics.all + 1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={ handleGoodClick } text="godd" />
      <Button onClick={ handleNeutralClick } text="neutral" />
      <Button onClick={ handleBadClick } text="bad" />
      <h2>statistics</h2>
      <Statistics statistics={ statistics }/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
