/** @format */

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import device from "../../styles/breakpoints";
import LeftSection from "./Hero/LeftSection";
import NavBar from "./NavBar";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SytledSection = styled.div`
	background-color: #00df8d;

	border-radius: 40px;
	padding: 1.5rem;
	box-sizing: border-box;
`;

const HeroContentSection = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;

	padding-top: 0.5rem;
	box-sizing: border-box;
`;

const ImageArea = styled.div`
	position: relative;
	right: 0px;
	top: 80px;

	/* bottom: 60; */
`;

const Hero = () => {
	const isMobile = useMediaQuery({ query: device.mobile });

	return (
		<SytledSection>
			<NavBar />
			<HeroContentSection>
				<LeftSection />
				<ImageArea>
					<img
						src={`${asset_prefix}/assets/HomePage/herobanner.png`}
						alt="image"
					/>
				</ImageArea>
			</HeroContentSection>
		</SytledSection>
	);
};

export default Hero;
