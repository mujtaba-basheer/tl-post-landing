/** @format */
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.div`
	/* min-height: 200px; */

	color: white;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	margin-bottom: 2rem;
`;
const AvailableOnContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;

	.available_on_text {
		font-weight: 400;
		font-size: 20px;
		line-height: 24px;
		color: #c9cad0;
	}

	.store_images {
		margin-left: 2rem;
	}
`;
const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 3rem;

	.text_container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 40%;
	}
	.features_text_title {
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		text-transform: capitalize;
		color: #ffffff;
	}
	.features_text_value {
		font-weight: 700;
		font-size: 40px;
		line-height: 48px;
		color: #00df8d;
	}
	.app_feature_img_container {
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export default function Features(): JSX.Element {
	return (
		<Container>
			<AvailableOnContainer>
				<span className="available_on_text">Available On </span>
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
			</AvailableOnContainer>
			<FeaturesContainer>
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
			</FeaturesContainer>
		</Container>
	);
}
