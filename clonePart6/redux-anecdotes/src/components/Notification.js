import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    setTimeout(() => { dispatch(removeNotification(''))}, 5000)
  })

  return (
    <div style={ notification.length === 0 ? { display: '' } : style }>
      { notification }
    </div>
  )
}

export default Notification