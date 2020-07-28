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
                    <Gameboard/>
					<Presets/>
                    
				</div>
				<div className='rules'>
					<h3>rules</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
						alias est, amet minus harum sed animi qui veniam nisi fugit, nam
						iste blanditiis voluptate vero, et omnis suscipit atque inventore?
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
