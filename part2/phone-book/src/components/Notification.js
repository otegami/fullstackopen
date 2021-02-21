import React from 'react'

const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  if(message !== null) {
    console.log(message)
    return (
      <div className="success">
        { message }
      </div>
    )
  }
}

export default Notification
