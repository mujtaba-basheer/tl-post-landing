/** @format */

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import device from "../../styles/breakpoints";
import NavBar from "./NavBar";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SytledSection = styled.div`
	background-color: #00df8d;
	min-height: 80vh;
	max-height: 80vh;
	border-radius: 40px;
	padding: 1.5rem;
	box-sizing: border-box;
`;

const HeroContentSection = styled.div`
	display: grid;
	/* border: 1px solid red; */
	grid-template-columns: 2fr 1fr;
	position: relative;
	padding-top: 1rem;
	box-sizing: border-box;
	/* margin-top: 2rem; */
`;

const ImageArea = styled.div`
	position: relative;
	right: 0px;

	/* top: 100px; */
	/* bottom: 60; */
`;

const LeftSection = styled.div`
	display: grid;
	/* place-items: center; */
`;
const HeaderTag = styled.h1``;
const Trade = styled.span`
	color: rgba(32, 49, 174, 1);
	margin-right: 0.3rem;
	font-size: 56px;
	font-weight: 700;
`;
const On = styled.span`
	color: rgba(255, 255, 255, 1);
	margin-right: 0.3rem;
	font-size: 56px;
	font-weight: 700;
`;

const Description = styled.p``;

const Hero = () => {
	const isMobile = useMediaQuery({ query: device.mobile });

	return (
		<SytledSection>
			<NavBar />
			<HeroContentSection>
				<LeftSection>
					<HeaderTag>
						<Trade>Trade</Trade>
						<On>On!</On>
					</HeaderTag>
					<Description>
						TradingLeagues is a first-of-its-kind fantasy trading platform
						providing a gamified experience of the financial markets.
					</Description>
				</LeftSection>
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
