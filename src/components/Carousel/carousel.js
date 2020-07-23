import React from "react";
import {} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const CarouselComponent = () => {
	return (
		<div>
			<Carousel pause={false} interval={1000}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://img.dmart.in/images/rwd/banners/hmpg/1-July-2020-carousel-grocery.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://img.dmart.in/images/rwd/banners/hmpg/18-june-2020-carousel-aware4.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://img.dmart.in/images/rwd/banners/hmpg/1-July-2020-carousel-Daily-Savings1.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselComponent;
