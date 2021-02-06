import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello { props.name }, you are { props.age } years old.s
      </p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={ 26 + age } />
      <Hello name={ name } age={ age }/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
