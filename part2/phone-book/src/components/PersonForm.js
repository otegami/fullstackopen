import React from 'react'

const PersonForm = ({ nameValue, numberValue, onNameChange, onNumberChange, onClick }) => {
  return (
    <form>
      <div>
        name: <input value={nameValue} onChange={onNameChange}/>
      </div>
      <div>
        number: <input value={numberValue} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={onClick}>add</button>
      </div>
    </form>
  )
}

export default PersonForm
