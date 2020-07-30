import React, { useEffect, useCallback } from "react";
import "./controls.styles.css";
import Button from './button'
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { getIsRunning, getTimerId } from "../../../reudx/selectors";
import { makeRandomGrid, tick, startPlaying, stopPlaying, clear } from '../../../reudx/actions'

const Controls = ({ isRunning, timerId, random, tick, startPlaying, stopPlaying, clear }) => {




	const togglePlay = useCallback(() => {
		if (isRunning) {
			clearInterval(timerId);
			stopPlaying();
		} else {
			let interval = setInterval(tick, 100);
			startPlaying(interval);
		}
	}, [isRunning, startPlaying, stopPlaying, tick, timerId])


	const clear_board = () => {
		if (isRunning) {
			clearInterval(timerId);
			stopPlaying();
		}
		clear();
	}

	useEffect(() => {
		random()
		let first_time = true
		if (first_time) {
			togglePlay()
		}

		first_time = false


	}, [random])


	return (
		<div className="controls">
			<div className="buttons">
				<Button
					handleClick={() => random()}
					title={'Randomise'}
					icon={'fa fa-random'}
				/>
				<Button
					handleClick={() => clear_board()}
					title={'Clear'}
					icon={'fa fa-undo'}
				/>
				<div className="button-group">
					<Button
						icon={isRunning ? 'fa fa-pause' : 'fa fa-play'}
						handleClick={() => togglePlay()}
					/>
					<Button
						handleClick={() => tick()}
						icon={'fa fa-step-forward'}
					/>
				</div>
			</div>
		</div>
	);
}


const mapStateToProps = createStructuredSelector({
	isRunning: getIsRunning,
	timerId: getTimerId
})

const mapDispatchToProps = (dispatch) => {
	return {
		random: () => dispatch(makeRandomGrid()),
		tick: () => dispatch(tick()),
		startPlaying: (timerId) => dispatch(startPlaying(timerId)),
		stopPlaying: () => dispatch(stopPlaying()),
		clear: () => dispatch(clear()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
