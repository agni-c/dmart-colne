import React from "react";
import { connect } from "react-redux";
import "./PriceDetails.css";
const PriceDetails = (props) => {
	return (
		<div className="priceDetails-container">
			<div className="p-title">
				<p>PRICE DETAILS</p>
			</div>
			<div className="p-body">
				<div className="price">
					<div className="price-text">
						Price ({props.addedItems.length} item)
					</div>
					<span>₹{props.price}</span>
				</div>
				<div className="delevery">
					<div className="delevery-text">Delivery Fee</div>
					<span>₹0</span>
				</div>
				<div className="total">
					<div className="total-text">Total</div>
					<span>₹{props.price}</span>
				</div>
				<div className="save">
					<div className="save-text">Save 900 in this offer</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		price: state.total,
		addedItems: state.addedItems,
	};
};

export default connect(mapStateToProps)(PriceDetails);
