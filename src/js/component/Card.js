import React from "react";
import PropTypes from "prop-types";

import reactImage from "../../img/reactjs-cover.png";

export const Card = props => {
	return (
		<div className="col-md-3 col-lg-3 col-sm-4 mt-3">
			<div className="card">
				<img src={reactImage} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">{props.content}</p>
					<a
						href="#"
						className="btn btn-primary col-md-12 col-lg-12 col-sm-12">
						{props.tucan || "CLICK ME ALT"}
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	content: PropTypes.string,
	tucan: PropTypes.string
};
