import React from "react";
import "./main.styles.css";
import Gameboard from "../gameboard/gameboard.component";
import Presets from "../presets/presets.component";

const MainContainer = () => {



	return (
		<div className="mainContainer">
			<div>
				<h3>Game of Life</h3>
			</div>
			<div className='mid'>
				<div className='gameContainer'>
					<Gameboard />
				</div>
				<div className='rules'>
					<h3>rules</h3>
					<p>
						<b>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</b><br></br>
						<b>Any live cell with two or three live neighbours lives on to the next generation.
						Any live cell with more than three live neighbours dies, as if by overpopulation.</b><br></br>
						<b>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</b>
					</p>
				</div>
			</div>

			<div>
				<h3>About this Algorithm</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint rem
					amet eum porro! Voluptatem quibusdam quam porro. Impedit, totam
					facilis illo voluptate similique aperiam enim eum repellendus dolor
					culpa eveniet.
				</p>
			</div>
		</div>
	);
};

export default MainContainer;
