import {
	ADD_TO_CART,
	ADD_QUANTITY,
	SUB_QUANTITY,
	REMOVE_ITEM,
} from "../actions/action.types";

import Item1 from "../images/71bp9IpcK-L._SX679_.jpg";
import Item2 from "../images/71wPwmxo2NL._SL1500_.jpg";
import Item3 from "../images/919e-u5b4zL._SL1500_.jpg";
import Item4 from "../images/item1.jpg";
import Item5 from "../images/item2.jpg";

const initialState = {
	items: [
		{
			id: 1,
			title: "Winter body",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
			price: 11000,
			img: Item1,
		},
		{
			id: 2,
			title: "Adidas",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
			price: 80000,
			img: Item2,
		},
		{
			id: 3,
			title: "Vans",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
			price: 12000,
			img: Item3,
		},
		{
			id: 4,
			title: "White",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
			price: 26000,
			img: Item4,
		},
		{
			id: 5,
			title: "Cropped-sho",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
			price: 16000,
			img: Item5,
		},
	],
	addedItems: [],
	total: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			console.log("reducer invoked", action.payload);
			console.log("added Item array", state.addedItems);

			let addedItem = state.items.find((item) => item.id === action.payload);
			//check if the action id exists in the addedItems
			let existed_item = state.addedItems.find(
				(item) => item.id === action.payload
			);
			if (existed_item) {
				addedItem.quantity += 1;
				return {
					...state,
					total: state.total + addedItem.price,
				};
			} else {
				addedItem.quantity = 1;
				//calculating the total
				let newTotal = state.total + addedItem.price;
				return {
					...state,
					addedItems: [...state.addedItems, addedItem],
					total: newTotal,
				};
			}

		case REMOVE_ITEM:
			let itemToRemove = state.addedItems.find(
				(item) => item.id === action.payload
			);
			let new_items = state.addedItems.filter(
				(item) => item.id !== action.payload
			);

			//calculating the total
			let afterRemovalTotal =
				state.total - itemToRemove.price * itemToRemove.quantity;
			console.log(itemToRemove);
			return {
				...state,
				addedItems: new_items,
				total: afterRemovalTotal,
			};

		case ADD_QUANTITY:
			let addingQuantity = state.items.find(
				(item) => item.id === action.payload
			);
			//NOTE
			addingQuantity.quantity += 1;
			let newTotal = state.total + addingQuantity.price;
			console.log(addingQuantity.quantity, "quantity");
			return {
				...state,
				total: newTotal,
			};
		case SUB_QUANTITY:
			let subItem = state.items.find((item) => item.id === action.payload);
			//if the qt == 0 then it should be removed
			if (subItem.quantity === 1) {
				let new_items = state.addedItems.filter(
					(item) => item.id !== action.payload
				);
				let newTotal = state.total - subItem.price;
				return {
					...state,
					addedItems: new_items,
					total: newTotal,
				};
			} else {
				subItem.quantity -= 1;
				let newTotal = state.total - subItem.price;
				return {
					...state,
					total: newTotal,
				};
			}

		default:
			return state;
	}
};
