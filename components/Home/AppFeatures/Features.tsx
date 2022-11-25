/** @format */
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import device from "../../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.div`
  /* min-height: 200px; */

  color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2rem;

  @media ${device.mobile} {
    padding: 1rem;
  }
`;
const AvailableOnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    display: block;
  }

  .available_on_text {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #c9cad0;

    @media ${device.mobile} {
      text-align: center;
      margin-bottom: 1em;
    }
  }

  .store_images {
    margin-left: 2rem;

    @media ${device.mobile} {
      margin: 0;
    }
  }
`;
const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 3rem;

  @media ${device.mobile} {
    display: block;
  }

  .text_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;

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
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${device.mobile} {
      width: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1.5em;
      margin-bottom: 3em;
    }

    & img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`;
const StoreImages = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
  }
`;

export default function Features(): JSX.Element {
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
