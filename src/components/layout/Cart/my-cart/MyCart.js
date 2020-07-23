import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./MyCart.css";
import {
	addQuantity,
	subtractQuantity,
	removeItem,
} from "../../../../actions/cartActions";

const MyCart = (props) => {
	//https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
	const [, setItem] = useState({});

	const onChange = (id) => {
		setItem({});
	};
	const increment = (id) => {
		props.addQuantity(id);
		setItem({});
	};
	const decrement = (id) => {
		props.subtractQuantity(id);
		setItem({});
	};
	const itemList = props.addedItems.map((item) => (
		<div className="ele-container" key={item.id}>
			<div className="cart-body">
				<a href="#case">
					<img src={item.img} alt="" />
				</a>
				<div className="cart-info">
					<h5>{item.title}</h5>
					<div className="descreption">
						<span>{item.desc}</span>
						<span>Seller: Agni</span>
						<span>
							<strong>{item.price} </strong>
							<strike>1500</strike> <span>flipkart assured</span>
						</span>
					</div>
				</div>
				<div className="delivery">
					<span>Delivery in 7 - 9 days | ₹40</span>
					<span>7 Days Replacement Policy</span>
				</div>
				<div className="interaction">
					<div className="quantity-chenger">
						<button onClick={(e) => decrement(item.id)}>-</button>
						{/* The input */}
						<input type="text" value={item.quantity} />
						{/* <span>{item.quantity}</span> */}
						<button onClick={(e) => increment(item.id)}>+</button>
					</div>
					<a href="#later" className="save-for-later">
						{" "}
						SAVE FOR LATER
					</a>
					<a
						href="#remove"
						onClick={(e) => props.removeItem(item.id)}
						className="remove">
						REMOVE
					</a>
				</div>
			</div>
		</div>
	));

	return (
		<div>
			<div className="cart-bar">
				<div className="item-number">
					<span>MyCart({props.addedItems.length})</span>
				</div>
				<div className="user-location">
					<span>
						{" "}
						<i className="fa fa-map-marker" aria-hidden="true"></i> deliver to
					</span>
					<select name="cars" id="cars">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>
			</div>
			{itemList}
			{props.addedItems.length !== 0 ? (
				<div className="cart-footer">
					<button>PLACE ORDER</button>
				</div>
			) : null}
		</div>
	);
};
const mapStateToProps = (state) => ({
	addedItems: state.addedItems,
});
const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (id) => {
			dispatch(removeItem(id));
		},
		addQuantity: (id) => {
			dispatch(addQuantity(id));
		},
		subtractQuantity: (id) => {
			dispatch(subtractQuantity(id));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
