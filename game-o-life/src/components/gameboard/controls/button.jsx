import React from 'react';
import './controls.styles.css'

const Button =  ({title, icon, handleClick}) => (
  <span onClick={handleClick} className="button">
    <i className={icon}></i> {title}
  </span>
)

export default Button