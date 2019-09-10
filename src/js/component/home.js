import React from "react";

//include images into your bundle
import { Card } from "./Card.js";
import { TagLine } from "./TagLine.js";
import { NavBar } from "./NavBar.js";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<div>
				<NavBar />
			</div>

			<div>
				<TagLine />
			</div>

			<div className="row mt-2">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
