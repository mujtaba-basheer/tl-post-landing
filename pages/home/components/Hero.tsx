/** @format */

import styled from "styled-components";
import device from "../../../styles/breakpoints";
import NavBar from "./Navbar";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.div`
  display: grid;
  justify-content: start;
  align-content: start;
  box-sizing: border-box;

  @media ${device.mobile} {
    margin-top: 2em;
    margin-bottom: 10em;
  }
`;

const HeaderTag = styled.h1``;

const Trade = styled.span`
  color: rgba(32, 49, 174, 1);
  margin-right: 0.3em;
  font-size: 56px;
  font-weight: 700;
`;

const On = styled.span`
  color: rgba(255, 255, 255, 1);
  margin-right: 0.3rem;
  font-size: 56px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #15182c;
  max-width: 440px;

  @media ${device.mobile} {
    font-size: 1rem;
    text-align: justify;
  }
`;

const GetLinkArea = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;

  @media ${device.mobile} {
    display: block;
  }
`;

const InputArea = styled.div`
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 80%;
  box-sizing: border-box;

  @media ${device.mobile} {
    width: auto;
    margin-bottom: 1em;
  }
`;

const NumberSpan = styled.span`
  height: "100%";
  margin-right: 10px;
`;

const Input = styled.input`
  height: 150%;
  flex: 0.7;
  border: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }

  /* padding: 8px 8px; */
`;

const LinkButton = styled.button`
  background: #2031ae;
  font-size: 1rem;
  border-radius: 47px;
  position: relative;
  border: none;
  height: 50px;
  right: 80px;
  top: 0px;
  color: #fff;
  width: 250px;
  padding: 0 11px;
  cursor: pointer;

  @media ${device.mobile} {
    right: 0px;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const StatsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;

  @media ${device.mobile} {
    width: 100%;
    height: auto;
    margin-top: 3em;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

const Number = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #33364c;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const About = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #484b5f;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const LeftSection = () => {
  return (
    <Container>
      <HeaderTag>
        <Trade>Trade</Trade>
        <On>On!</On>
      </HeaderTag>
      <Description>
        TradingLeagues is a first-of-its-kind fantasy trading platform providing
        a gamified experience of the financial markets.
      </Description>
      <GetLinkArea>
        <InputArea>
          <NumberSpan>+ 91</NumberSpan>
          <Input></Input>
        </InputArea>
        <LinkButton>GET DOWNLOAD LINK</LinkButton>
      </GetLinkArea>
      <StatsArea>
        <StatsContainer>
          <Number>12.2K+</Number>
          <About>Total Downloads</About>
        </StatsContainer>
        <StatsContainer>
          <Number>12000</Number>
          <About>Total Winnings</About>
        </StatsContainer>
        <StatsContainer>
          <Number>12,302</Number>
          <About>Total Downloads</About>
        </StatsContainer>
      </StatsArea>
    </Container>
  );
};

const HeroContainer = styled.div`
  padding: 2rem;

  @media ${device.mobile} {
    padding: 1rem;
    width: 100vw;
    margin-bottom: 13em;
  }
`;

const SytledSection = styled.div`
  background-color: #00df8d;
  border-radius: 40px;
  padding: 3em;
  padding-bottom: 7.5em;
  box-sizing: border-box;

  @media ${device.mobile} {
    padding: 1.5em 1em;
    padding-bottom: 7.5em;
  }
`;

const HeroContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-top: 4em;
  position: relative;

  @media ${device.mobile} {
    display: block;
    margin: 0;
    width: auto;
  }
`;

const ImageArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  @media ${device.mobile} {
    top: auto;
    bottom: -15.5em;
    width: 80%;
    margin: 0 10%;
    transform: translateY(50%);
  }

  & img {
    @media ${device.mobile} {
      width: 100%;
      height: auto;
    }
  }
`;

const Hero = () => {
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
