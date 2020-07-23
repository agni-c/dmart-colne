/* eslint-disable */
import React from "react";
import NavComponent from "./components/layout/Nav/Nav";
import Footer from "./components/layout/footer/Footer.js";
import "./App.css";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/page1";
import Cart from "./pages/Cart/Cart";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
// import store from "./store";
const store = createStore(cartReducer);

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<NavComponent />
				<Route exact path="/" component={HomePage} />
				<Route exact path="/page1" component={Page1} />
				<Route exact path="/cart" component={Cart} />
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;
