/** @format */

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BG from "../../public/assets/Footer/BG.png";
import device from "../../styles/breakpoints";
const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.footer`
	height: 100px;
	width: 100%;
	/* border: 1px solid red; */
	color: white;
	background: url(${asset_prefix}/assets/Footer/BG.png);
	background-size: cover;
	padding: 2rem;
	/* height: 500px; */
	height: fit-content;
	display: flex;
	flex-direction: column;
	@media ${device.mobile} {
	}
`;

const MainArea = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 2rem;
	border-bottom: 1px solid #ffffff90;

	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
	}
`;

const Row1 = styled.div`
	display: flex;
	flex-direction: column;
	width: 33%;
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 3rem;
`;
const InputArea = styled.div`
	/* border: 1px solid red; */
	height: 44px;
	display: flex;
	flex-direction: row;
	border-radius: 30px;
	width: 250px;
	padding: 0 0.3rem;
	background: rgba(255, 255, 255, 0.1);

	& input {
		color: #fff;
		max-width: 80%;
		padding: 0.3rem 0.5rem;
		width: 100%;
		background: none;
		border: none;
		outline: none;
		border-radius: 30px;
	}
`;

const GETLINKBTN = styled.button`
	background: #00df8d;
	border-radius: 47px;
	border: none;
	height: 44px;
	padding: 0 0.8rem;
	position: relative;
	right: 30px;
	text-align: center;
	color: #15182c;
	font-size: 12px;
	font-family: "Barlow";
	font-weight: 500;
`;

const DownLoadAppContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
`;

const Row2 = styled.div`
	width: 33%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const PageLinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	.links-box {
		margin-right: 2rem;
	}
	.links_box_title {
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
	}
`;

const LinksItems = styled.p`
	margin: 0.8rem 0;
`;

const SocialLinksContainer = styled.div`
	width: 100%;
`;
const LinksContainer = styled.div`
	margin-top: 1rem;
	width: 50%;
	/* border: 1px solid red; */

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Row3 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 30%;
	.icons {
		margin-right: 0.5rem;
	}
	.title {
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
	}
	.connect-us-items {
		display: flex;
		flex-direction: row;
	}
`;

const TradeMarkArea = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1.5rem 0;
	justify-content: space-between;
	.below-footer-links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 18%;
	}
`;

const Links = {
	twitter: `${asset_prefix}/assets/Footer/Twitter.svg`,
	facebook: `${asset_prefix}/assets/Footer/FB.svg`,
	instagram: `${asset_prefix}/assets/Footer/Instagram.svg`,
	linkedIn: `${asset_prefix}/assets/Footer/Linkedin.svg`,
	youtube: `${asset_prefix}/assets/Footer/Youtube.svg`,
};

function Footer() {
	return (
		<Container>
			<MainArea>
				<Row1>
					<Image
						src={`${asset_prefix}/assets/Footer/TL-Logo.svg`}
						width={150}
						height={50}
						alt="logo"
					/>
					<InputContainer>
						<InputArea>
							<input placeholder="Enter you phone Number"></input>
						</InputArea>
						<GETLINKBTN>GET DOWNLOAD LINK</GETLINKBTN>
					</InputContainer>
					<DownLoadAppContainer>
						<Image
							src={`${asset_prefix}/assets/HomePage/App_Store.webp`}
							width={150}
							height={50}
							alt="logo"
						/>
						<Image
							src={`${asset_prefix}/assets/HomePage/Play_Store.webp`}
							width={150}
							height={50}
							alt="logo"
						/>
					</DownLoadAppContainer>
				</Row1>
				<Row2>
					<PageLinksContainer>
						<div className="links-box">
							<div className="links_box_title">How To Play</div>
							<LinksItems>Rules</LinksItems>
							<LinksItems>FAQs</LinksItems>
						</div>
						<div className="links-box">
							<div className="links_box_title">About Us</div>
							<LinksItems>Our Mission</LinksItems>
						</div>
					</PageLinksContainer>
					<SocialLinksContainer>
						<p>Connect Us</p>
						<LinksContainer>
							{Object.keys(Links).map((item) => (
								<Image
									key={item}
									src={Links[item]}
									width={25}
									height={20}
									alt={`${item}-logo`}
								/>
							))}
						</LinksContainer>
					</SocialLinksContainer>
				</Row2>
				<Row3>
					<p className="title">Connect Us</p>
					<div className="connect-us-items">
						<span className="icons">
							<Image
								src={`${asset_prefix}/assets/Footer/Call.svg`}
								width={20}
								height={17}
								alt="call-icon"
							/>
						</span>
						<p className="details">+91 8923456789</p>
					</div>
					<div className="connect-us-items">
						<span className="icons">
							<Image
								src={`${asset_prefix}/assets/Footer/Email.svg`}
								width={20}
								height={17}
								alt="call-icon"
							/>
						</span>
						<p className="details">tradingleagues@gmail.com</p>
					</div>
					<div className="connect-us-items">
						<span className="icons">
							<Image
								src={`${asset_prefix}/assets/Footer/Location.svg`}
								width={20}
								height={17}
								alt="call-icon"
							/>
						</span>
						<p className="details">
							1A, first floor, Eve Garden, <br />
							Indira Nagar, Bangalore,
							<br /> Karnataka
						</p>
					</div>
				</Row3>
			</MainArea>
			<TradeMarkArea>
				<div>© 2022, Rain Platforms Inc. All rights reserved.</div>
				<div className="below-footer-links">
					<p>Privacy policy</p>
					<p>Terms & Conditions</p>
				</div>
			</TradeMarkArea>
		</Container>
	);
}

export default Footer;
