import { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import * as Styled from '../styles'

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility,
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <Styled.Button onClick={toggleVisibility}>
                    {props.buttonLabel}
                </Styled.Button>
            </div>
            <div style={showWhenVisible}>
                <Styled.Toggle>
                    {props.children}
                    <Styled.Button
                        style={{ marginLeft: '15px' }}
                        onClick={toggleVisibility}
                    >
                        Cancel
                    </Styled.Button>
                </Styled.Toggle>
            </div>
        </div>
    )
})

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
}

Togglable.displayName = 'Togglable'

export default Togglable
