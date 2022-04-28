import { connect } from 'react-redux' // use connect instead of useSelector

const Notification = (props) => {
  const style = {
    background: '#adffd5',
    color: '#000',
    padding: 10,
    fontWeight: "bold"
  }

  if (!props.notification) {
    return null
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification