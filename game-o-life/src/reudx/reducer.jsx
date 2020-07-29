import { GameTypes } from "./types";
import { makeGrid, advanceGrid } from "../utils/game_functions";

const GRID_HEIGHT = 25;
const GRID_WIDTH = 40;
const initialGrid = makeGrid(GRID_HEIGHT, GRID_WIDTH);

const INITIAL_STATE = {
	count: 0,
	timerId: null,
	isRunning: false,
	grid_height: 25,
	grid_width: 40,
	game_grid: initialGrid,
};

const game_reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GameTypes.TICK:
			return {
				...state,
				count: state.count + 1,
				game_grid: advanceGrid(state.game_grid.slice(0)),
			};
		case GameTypes.CLEAR:
			return {
				...state,
				count: (state.count = 0),
				game_grid: makeGrid(state.grid_height, state.grid_width),
			};
		case GameTypes.MAKE_RANDOM:
			return {
				...state,
				count: (state.count = 0),
				game_grid: makeGrid(state.grid_height, state.grid_width, true),
			};
		case GameTypes.PLAY:
			return {
				...state,
				timerId: action.timerId,
				isRunning: true,
			};
		case GameTypes.STOP:
			return {
				...state,
				timerId: null,
				isRuninng: false,
			};
		case GameTypes.TOGGLE_ALIVE:
			let board = state.game_grid.slice(0);
			let cell = board[action.x][action.y];
			cell.status = !cell.status;
			cell.newBorn = !cell.newBorn;
			return {
				...state,
				game_grid: board,
			};

		default:
			return state;
	}
};

export default game_reducer;
