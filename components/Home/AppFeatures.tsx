/** @format */
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import device from "../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	padding: 2rem 6em;
	margin-bottom: 2rem;

	@media ${device.mobile} {
		padding: 1rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

const AvailableOnContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;

	@media ${device.mobile} {
		/* display: block; */
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: -3rem;
		margin-top: 48px;
	}

	.available_on_text {
		font-weight: 400;
		font-size: 20px;
		line-height: 24px;
		color: #c9cad0;
		margin-right: 2.5em;

		@media ${device.mobile} {
			text-align: center;

			width: 100%;
			padding-left: 1rem;

			margin-bottom: 1em;
		}
	}

	.store_images {
		@media ${device.mobile} {
			margin: 0;
		}
	}
`;

const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	margin-top: 6em;
	margin-bottom: 3rem;
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.text_container {
		display: flex;
		flex-direction: row;
		gap: 3em;

		@media ${device.mobile} {
			width: auto;
		}
	}
	.features_text_title {
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		text-transform: capitalize;
		color: #ffffff;

		@media ${device.mobile} {
			font-size: 12px;
		}
	}
	.features_text_value {
		font-weight: 700;
		font-size: 40px;
		line-height: 48px;
		color: #00df8d;

		@media ${device.mobile} {
			font-size: 20px;
			line-height: normal;
		}
	}
	.app_feature_img_container {
		display: flex;
		flex-direction: row;
		gap: 3em;

		@media ${device.mobile} {
			width: auto;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			column-gap: 2.5em;
			/* margin-top: 1rem; */
			margin-bottom: 3em;
		}

		& img {
			@media ${device.mobile} {
				display: block;
				width: 100%;
				height: 48px;
			}
		}
	}
`;

const StoreImages = styled.div`
	display: flex;
	gap: 1em;
`;

export default function AppFeatures(): JSX.Element {
	return (
		<Container>
			<AvailableOnContainer>
				<p className="available_on_text">Available On </p>
				<StoreImages>
					<Image
						src={`${asset_prefix}/assets/HomePage/App_Store.webp`}
						width={150}
						height={50}
						alt="App Store"
						className="store_images"
					/>
					<Image
						src={`${asset_prefix}/assets/HomePage/Play_Store.webp`}
						width={150}
						height={50}
						alt="Play Store"
						className="store_images"
					/>
				</StoreImages>
			</AvailableOnContainer>
			<FeaturesContainer>
				<div className="app_feature_img_container">
					<Image
						src={`${asset_prefix}/assets/HomePage/Made_India.svg`}
						width={120}
						height={100}
						alt="Play Store"
					/>
					<Image
						src={`${asset_prefix}/assets/HomePage/Secure_Payment.svg`}
						width={120}
						height={100}
						alt="Play Store"
					/>
					<Image
						src={`${asset_prefix}/assets/HomePage/Insta_Withdrawal.svg`}
						width={120}
						height={100}
						alt="Play Store"
					/>
					<Image
						src={`${asset_prefix}/assets/HomePage/Support.svg`}
						width={120}
						height={100}
						alt="Play Store"
					/>
				</div>
				<div className="text_container">
					<div className="features_text">
						<div className="features_text_title">Try Games For</div>
						<div className="features_text_value">Free</div>
					</div>
					<div className="features_text">
						<div className="features_text_title">Win Upto</div>
						<div className="features_text_value">₹10,000 </div>
					</div>
					<div className="features_text">
						<div className="features_text_title">Play & Earn</div>
						<div className="features_text_value">Everyday</div>
					</div>
				</div>
			</FeaturesContainer>
		</Container>
	);
}
