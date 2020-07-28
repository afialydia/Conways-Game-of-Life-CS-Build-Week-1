import React from "react";
import "./gameboard.styles.css";
import Grid from "../grid/grid.component";
import Controls from "../controls/controls.component";

const Gameboard = () => {
	return (
		<div className="conatainerInner">
			<h4>generations</h4>
			<Grid /> 
			<Controls />
		</div>
	);
};

export default Gameboard;
