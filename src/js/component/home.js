import React from "react";

//include images into your bundle
import { Card } from "./Card.js";
import { TagLine } from "./TagLine.js";
import { NavBar } from "./NavBar.js";
import { Bottom } from "./Bottom.js";

//create your first component
export const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<TagLine />
			<div className="container">
				<div className="row">
					<div className="card-deck">
						<Card
							content="This is the first content."
							tucan="Clik ME 1"
						/>
						<Card content="This is the second content." />
						<Card
							content="This is the Third content."
							tucan="Clik ME 3"
						/>
						<Card content="This is the fourth content." />
					</div>
				</div>
			</div>
			<div className="footer">
				<Bottom />
			</div>
		</React.Fragment>
	);
};
