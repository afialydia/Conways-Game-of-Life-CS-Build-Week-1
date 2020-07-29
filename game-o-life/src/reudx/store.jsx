import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import root_reducer from "./root_reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlewares = [logger,thunk];


const store = createStore(
    root_reducer,
	composeEnhancers(applyMiddleware(...middlewares))
);


export default store