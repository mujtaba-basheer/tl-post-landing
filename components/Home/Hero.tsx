/** @format */

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import device from "../../styles/breakpoints";
import LeftSection from "./Hero/LeftSection";
import NavBar from "./NavBar";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const HeroContainer = styled.div`
  padding: 2rem;

  @media ${device.mobile} {
    padding: 1rem;
    border: 1px solid red;
    width: 100vw;
    margin-bottom: 4em;
  }
`;

const SytledSection = styled.div`
  background-color: #00df8d;
  border-radius: 40px;
  padding: 1.5rem;
  box-sizing: border-box;
  @media ${device.mobile} {
    width: 100%;
  }
`;

const HeroContentSection = styled.div`
  /* display: grid;
	grid-template-columns: 1fr 1fr; */
  padding-top: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const ImageArea = styled.div`
  position: relative;
  right: 0px;
  top: 80px;
  /* bottom: 60; */

  & img {
    @media ${device.mobile} {
      width: 100%;
      height: auto;
    }
  }
`;

const Hero = () => {
  const isMobile = useMediaQuery({ query: device.mobile });

  return (
    <HeroContainer>
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
    </HeroContainer>
  );
};

export default Hero;
