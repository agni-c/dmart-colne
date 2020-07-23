import React from "react";
import CarouselComponent from "../components/Carousel/carousel.js";
import FourBundle from "../components/grids/fourBundle/fourBundle.js";
import SixSlabs from "../components/grids/SixTile/SixTile.js";
import BundleFive from "../components/grids/bundleFive/BundilFive.js";
const HomePage = () => {
	return (
		<div>
			<CarouselComponent />
			<div className={"content"}>
				<FourBundle />
				<SixSlabs />
				<BundleFive />
				<FourBundle />
				<SixSlabs />
				<BundleFive />
				<FourBundle />
				<SixSlabs />
				<BundleFive />
				<FourBundle />
				<SixSlabs />
				<BundleFive />
			</div>
		</div>
	);
};

export default HomePage;
