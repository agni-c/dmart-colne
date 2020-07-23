import {
	ADD_TO_CART,
	ADD_QUANTITY,
	SUB_QUANTITY,
	REMOVE_ITEM,
} from "./action.types.js";

export const addToCart = (id) => {
	console.log("addTocart invoked", id);
	return {
		type: ADD_TO_CART,
		payload: id,
	};
};
export const removeItem = (id) => {
	// console.log("addTocart invoked", id);
	return {
		type: REMOVE_ITEM,
		payload: id,
	};
};
export const addQuantity = (id) => {
	// console.log("addTocart invoked", id);
	return {
		type: ADD_QUANTITY,
		payload: id,
	};
};
export const subtractQuantity = (id) => {
	// console.log("addTocart invoked", id);
	return {
		type: SUB_QUANTITY,
		payload: id,
	};
};
