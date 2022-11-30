/** @format */

import styled from "styled-components";
import { whyPlayDetails } from "../../lib/why-play";
import device from "../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
	background: url(${asset_prefix}/assets/Footer/BG.png);
	background-size: cover;
	padding: 80px 0;

	@media ${device.mobile} {
		padding: 50px 0;
	}
`;

const SectionContent = styled.div`
	margin: 0 auto;
	width: min(70vw, 1200px);
	color: #ffffff;

	@media ${device.mobile} {
		width: 90vw;
	}
`;

const BigHeading = styled.h2`
	font-size: 56px;
	font-weight: 700;
	line-height: 67px;
	margin-bottom: 18px;

	@media ${device.mobile} {
		font-size: 40px;
		line-height: 48px;
		margin-bottom: 16px;
	}
`;

const SubText = styled.p`
	font-size: 20px;
	font-weight: 400;

	@media ${device.mobile} {
		font-size: 16px;
	}
`;

const GridContainer = styled.div`
	margin-top: 54px;
	display: grid;
	// grid-template-columns: repeat(3, 290px);
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;
	gap: 2em;

	@media ${device.mobile} {
		display: flex;
		overflow-x: auto;
		margin-top: 40px;

		&::-webkit-scrollbar {
			display: none;
		}
		&::-webkit-scrollbar-track {
			display: none;
		}
		scrollbar-width: none;
	}
`;

const GridItem = styled.div`
	border: 1px solid #484b5f;
	border-radius: 20px;
	padding: 2em;

	@media ${device.mobile} {
		width: 236px;
		min-width: 270px;
		padding: 24px;
	}
`;

const Header = styled.div`
	display: flex;
	gap: 1em;
	margin-bottom: 24px;

	@media ${device.mobile} {
		margin-bottom: 1.5em;
	}

	& h3 {
		font-size: 24px;
		font-weight: 600;
		@media ${device.mobile} {
			font-size: 18px;
		}
	}
`;

const Description = styled.p`
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;

	@media ${device.mobile} {
		line-height: 28px;
		font-size: 16px;
	}
`;

const WhyPlay: () => JSX.Element = () => {
	return (
		<StyledSection>
			<SectionContent>
				<BigHeading>Why play on TradingLeagues</BigHeading>
				<SubText>To double the fun while defying the limits</SubText>
				<GridContainer>
					{whyPlayDetails.map((x, i) => (
						<GridItem key={i}>
							<Header>
								<img
									src={`${asset_prefix}/assets/HowToPlay/${x.icon}`}
									alt="marker"
								/>
								<h3 dangerouslySetInnerHTML={{ __html: x.heading }}></h3>
							</Header>
							<Description>{x.para}</Description>
						</GridItem>
					))}
				</GridContainer>
			</SectionContent>
		</StyledSection>
	);
};

export default WhyPlay;
