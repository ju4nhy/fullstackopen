import React from 'react'

// Ilmoitus onnistuneista operaatioista ja virhetilanteista
const Notification = ({ message, errorMessage }) => {
  if (message === null) {
    return null
  } else if (message === errorMessage) {
      return ( 
      <div className="error">{message}</div> 
      )
  } 
  return (
  <div className="notification">{message}</div>
  )
}

export default Notification