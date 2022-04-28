import * as Styled from '../styles'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    if (message.includes('Error!')) {
        return <Styled.Error>{message}</Styled.Error>
    }
    return <Styled.Success>{message}</Styled.Success>
}

export default Notification
