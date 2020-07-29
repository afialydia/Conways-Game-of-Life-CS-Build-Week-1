import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./gameboard.styles.css";
import Grid from "./grid/grid.component";
import Controls from "./controls/controls.component";
import { getCount } from "../../reudx/selectors";

const Gameboard = ({count}) => {
	return (
		<div className="conatainerInner">
			<h4>Generations: {count}</h4>
			<Grid />
			<Controls />
		</div>
	);
};


const mapStateToProps = createStructuredSelector({
	count: getCount
})
  
  export default connect(mapStateToProps)(Gameboard);