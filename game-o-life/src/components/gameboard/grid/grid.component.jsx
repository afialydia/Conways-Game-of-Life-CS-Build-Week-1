import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { getGameGrid, getIsRunning } from "../../../reudx/selectors";
import { toggleAlive } from '../../../reudx/actions'
import Cell from './cell.component'
import "./grid.styles.css";

const Grid = ({ game_grid, toggleAlive, isRunning }) => {
  console.log(game_grid)

  const toggie = (i, j) => {
    if (!isRunning) {
      toggleAlive(i, j)
    } 
  }

  return (
    <div>
      <table>
        <tbody>
          {game_grid.map((row, i) =>
            <tr key={i}> {row.map((cell, j) =>
              <Cell
                key={j}
                alive={cell.status}
                newBorn={cell.newBorn}
                handleClick={() => toggie(i, j)}
              />)}
            </tr>)}
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  game_grid: getGameGrid,
  isRunning: getIsRunning
})

const mapDispatchToProps = (dispatch) => ({
  toggleAlive: (x, y) => dispatch(toggleAlive(x, y))
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid);




