import React from "react";

import reactImage from "../../img/reactjs-cover.png";

export const Card = () => {
	return (
		<div className="col-md-3 col-lg-3 col-sm-4 mt-3">
			<div className="card">
				<img src={reactImage} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a
						href="#"
						className="btn btn-primary col-md-12 col-lg-12 col-sm-12">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
