import React from 'react'

const Button = ({ type, size, color, children }) => {
  return (
    <button className={`btn btn-${type} btn-${size} btn-color${color}`}>
        {children}
    </button>
  )
}

export default Button;