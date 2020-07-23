import React, { useState } from "react";
import { Card, Button, Col, Row, Form } from "react-bootstrap";
import "./Card.css";
import { addToCart } from "../../../actions/cartActions";
import { connect } from "react-redux";

const CardComponent = (props) => {
	console.log(props.items);

	const [filterState, setFilterState] = useState({
		search: "",
		cheapFirst: false,
	});

	const handleClick = (id) => {
		props.addToCart(id);
	};
	const priceHighToLow = () => {
		console.log("HIGH TO LOW");
		setFilterState({ ...filterState, cheapFirst: false });
	};
	const priceLowToHigh = () => {
		console.log("LOW TO HIGH");
		setFilterState({ ...filterState, cheapFirst: true });
	};

	let filteredItems = props.items.filter((item) => {
		return item.title.toLowerCase().includes(filterState.search.toLowerCase());
	});

	let sortedAndFilteredItems = filterState.cheapFirst
		? filteredItems.sort((a, b) => a.price - b.price)
		: filteredItems.sort((a, b) => b.price - a.price);

	let CardCart = sortedAndFilteredItems.map((item) => (
		<Card className="Card-full" key={item.id}>
			<Card.Text id="Card-title">{item.title}</Card.Text>
			<Card.Img className="card-img" variant="top" src={item.img} />
			<Card.Body className=" container card-background">
				<Row>
					<Col>
						<Row>
							<Col>
								<Card.Text className="card-text">
									<strike style={{ color: "grey", fontSize: "13px" }}>
										DMart 555.00
									</strike>
								</Card.Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card.Text className="card-text">
									{"\u20B9"}
									{item.price}
								</Card.Text>
							</Col>
						</Row>
					</Col>
					<Col>
						<div id="button-danger" style={{ marginBottom: "0.5rem" }}>
							{/* https://stackoverflow.com/questions/15158754/set-indian-rupee-symbol-on-text-view */}
							<span>save</span> <strong>{"\u20B9"}535</strong>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<select style={{ width: "100%" }} name="cars" id="cars">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
					</Col>
				</Row>
				<Row>
					<Col xs={9} className="buy-btn">
						<Button
							onClick={(e) => handleClick(item.id)}
							variant="success"
							style={{ width: "100%", marginLeft: ".1rem" }}>
							Buy Now
						</Button>
					</Col>
					<Col xs={3} className="buy-btn">
						<button className="pencil">
							<i className="fa fa-clipboard" aria-hidden="true"></i>
						</button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	));

	return (
		<div>
			<div className="sorting-container">
				<input
					type="search"
					onChange={(e) => setFilterState({ search: e.target.value })}
					placeholder="Search your item"
				/>

				<div className="sorting-btns">
					<button onClick={priceLowToHigh}>Low to high</button>
					<button onClick={priceHighToLow}>High to Low</button>
				</div>
			</div>
			<div className="card-grid">{CardCart}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
