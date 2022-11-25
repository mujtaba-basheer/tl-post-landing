/** @format */

import Footer from "../components/Footer/Footer";
import Features from "../components/Home/AppFeatures/Features";

import Hero from "../components/Home/Hero";
import WhyPlayLeague from "../components/Home/WhyPlayLeague/WhyPlayLeague";

const HomePage = (): JSX.Element => {
	return (
		<div>
			<Hero />
			<Features />
			<WhyPlayLeague />
			<Footer />
		</div>
	);
};

export default HomePage;
