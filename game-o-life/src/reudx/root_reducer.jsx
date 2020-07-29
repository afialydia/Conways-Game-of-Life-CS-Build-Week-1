import { combineReducers } from "redux";
import game_reducer from './reducer'

const combinedReducers = combineReducers({
	game_reducer
});

const root_reducer = (state, action) => {
  
    return combinedReducers(state, action);
  };

export default root_reducer;
