import React from "react";
import Dummy from "../../components/layout/Cart/dummy/Dummy";
import MyCart from "../../components/layout/Cart/my-cart/MyCart";
import PriceDetails from "../../components/layout/Cart/price-details/PriceDetails";
import "./Cart.css";
const Cart = () => {
	return (
		<div id="cart-layout">
			<div id="my-cart">
				<MyCart />
			</div>
			<div className="sticky-container">
				<div id="price-details">
					<PriceDetails />
				</div>
				<div id="dummy">
					<Dummy />
				</div>
			</div>
		</div>
	);
};

export default Cart;
