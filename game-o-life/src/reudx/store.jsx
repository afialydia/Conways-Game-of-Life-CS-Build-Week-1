import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import root_reducer from "./root_reducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
  
    middlewares.push(logger);
  
  }

const store = createStore(
    root_reducer,
	composeEnhancers(applyMiddleware(...middlewares))
);



export default store