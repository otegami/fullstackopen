import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({text}) => (<div> { text } </div>)
const VoteResult = ({number}) => (<div>has { number } votes</div>)
const Button = ({ handleClick, text }) => (<button onClick={ handleClick }>{ text }</button>)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))
  const [max, setMax] = useState(0)

  const getRandomNumber = max => (Math.floor(Math.random() * Math.floor(max)))
  const handleAnectodeClick = () => (setSelected(getRandomNumber(props.anecdotes.length)))
  const handlePointsClick = () => { 
    const setPoint = [...points]
    setPoint[selected] += 1
    setPoints(setPoint)
    setMax(Math.max(...setPoint))
  }

  return (
    <div> 
      <h2>Anecdote of the day</h2>
      <Anecdote text={props.anecdotes[selected]} />
      <VoteResult number={points[selected]} />
      <div>
        <Button handleClick={ handleAnectodeClick } text='next anecdote' />
        <Button handleClick={ handlePointsClick } text='vote'/>
      </div>
      <h2>Anecdote with most votes</h2>
      <Anecdote text={props.anecdotes[points.indexOf(max)]} />
      <VoteResult number={max} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
