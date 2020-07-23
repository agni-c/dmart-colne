import React from "react";
import CardComponent from "../components/Cards/Card/Card";
import TagCard from "../components/Cards/TagCard/TagCard";
import BreadCrumbs from "./../components/layout/breadCrumbs/BreadCrumbs";
import "./page1.css";
const Page1 = () => {
	return (
		<div className="content ">
			<BreadCrumbs />
			<TagCard />
			<CardComponent />
		</div>
	);
};

export default Page1;
