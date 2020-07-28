import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from './components/main/main.component'

import "./App.css";


function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={MainContainer} />
			</Switch>

		</div>
	);
}

export default App;
