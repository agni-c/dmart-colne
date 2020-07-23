import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
	return (
		<footer className="footer-custom">
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<ul className=" list-unstyled ">
							<li>
								<h4>DAILY NEEDS</h4>
							</li>
							<li>Detergents</li>
							<li>Biscuits & Cookies</li>
							<li>Tea</li>
							<li>Soaps</li>
							<li>Diapers & Wipes & something else</li>
						</ul>
					</Col>
					<Col xs={6} md={4}>
						<ul className=" list-unstyled ">
							<li>
								<h4>DAILY NEEDS</h4>
							</li>
							<li>Detergents</li>
							<li>Biscuits & Cookies</li>
							<li>Tea</li>
							<li>Soaps</li>
							<li>Diapers & Wipes</li>
						</ul>
					</Col>
					<Col xs={6} md={4}>
						<div className="footer-seal-container">
							<img
								src="https://www.iconspng.com/uploads/round-golden-badge/round-golden-badge.png"
								alt=""
								className="footer-seal"
							/>
							<img
								src="https://www.iconspng.com/uploads/round-golden-badge/round-golden-badge.png"
								alt=""
								className="footer-seal"
							/>

							<img
								src="https://f0.pngfuel.com/png/918/845/google-play-logo-png-clip-art.png"
								alt=""
								className="footer-seal"
								// style={{ maxHeight: "40px", marginLeft: "-15px" }}
							/>

							<img
								src="https://www.freepngimg.com/thumb/iphone/68600-play-google-apple-app-iphone-store.png"
								alt=""
								className="footer-seal"
								// style={{ maxHeight: "40px" }}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
