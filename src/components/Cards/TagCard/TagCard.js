import React from "react";
import { Card } from "react-bootstrap";
import "./TagCard.css";
const TagCard = () => {
	return (
		<div>
			<Card body>
				{"   "}
				<button className="tags">All cooking products</button>
				{"   "}
				{"   "}
				<button className="tags">Blended Oil</button>
				{"   "}

				{"   "}
				<button className="tags">Ground Nut Oil</button>
				{"   "}
				<button className="tags">Olive Oil</button>
				{"   "}
				<button className="tags">Materd Oil</button>
				{"   "}
				<button className="tags">Olive Oil</button>
			</Card>
		</div>
	);
};

export default TagCard;
