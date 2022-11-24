/** @format */

import Footer from "../components/Footer/Footer";
import Features from "../components/Home/AppFeatures/Features";

import Hero from "../components/Home/Hero";

const HomePage = (): JSX.Element => {
	return (
		<div>
			<Hero />
			<Features />
			<Footer />
		</div>
	);
};

export default HomePage;
