import React from 'react'

// Notification message for errors and successful operations
const Notification = ({ message, errorMessage }) => {
  if (message === null) {
    return null
  } else if (message === errorMessage) {
        return ( <div className="error">{message}</div> )
  } 
   return (<div className="notification">{message}</div>)
}

export default Notification