import React from 'react'

const Button = ({ buttonValue, buttonBackgroundColor }) => {
    return (
        <button style={{
            backgroundColor: buttonBackgroundColor
        }} className='button'>{buttonValue}</button>
    )
}

export default Button