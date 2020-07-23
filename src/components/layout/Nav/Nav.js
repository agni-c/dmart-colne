import React from "react";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
const NavComponent = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
			className="sticky-top navbar-custom">
			<Link to="/" className="navbar-brand">
				<img
					src="https://png2.cleanpng.com/sh/5df21964e2b0a5bfe0d2453b6b07ffd9/L0KzQYm3VcE1N5p9j5H0aYP2gLBuTfQudZJ3jJ9qbXLod7L2jr1lNZ5miuY2cnX3cbrzTfdzd5Rqius2c4Tygra0hL1uaaN5RadqZkm1QLO6VfY6apU5RqcDOUm3RIe6UcUzPmM8TqQCNUO8QYe1kP5o/kisspng-d-mart-ambegaon-d-mart-retail-grocery-store-d-mart-5af920b35f9bd4.5899446315262762753916.png"
					alt=""
					className="brand-logo"
				/>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Form inline id="search-bar" className="mr-auto">
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-primary">Search</Button>
				</Form>
				<Nav className="ml-auto">
					<Link to="/page1" className="nav-link">
						Products
					</Link>

					<Link to="/cart" className="nav-link">
						{" "}
						<i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavComponent;
