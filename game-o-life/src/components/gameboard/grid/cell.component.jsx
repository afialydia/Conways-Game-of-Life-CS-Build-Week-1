import React from 'react';
import './grid.styles.css'

const Cell = ({ alive, newBorn, handleClick }) =>
  (
    <td
      onClick={handleClick}
      className={`${alive ? 'alive' : ''} ${newBorn ? 'new-born' : ''}`}
    >
    </td>
  )

export default Cell