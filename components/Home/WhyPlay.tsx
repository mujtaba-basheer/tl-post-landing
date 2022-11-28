import styled from "styled-components";
import { whyPlayDetails } from "../../lib/why-play";
import device from "../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background: url(${asset_prefix}/assets/Footer/BG.png);
  background-size: cover;
  padding: 6em 0;

  @media ${device.mobile} {
    padding: 3em 0;
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
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 76px;
  margin-bottom: 0.25em;

  @media ${device.mobile} {
    font-size: 2.5rem;
    line-height: 48px;
  }
`;

const SubText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

const GridContainer = styled.div`
  margin-top: 3em;
  display: grid;
  // grid-template-columns: repeat(3, 290px);
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 2em;

  @media ${device.mobile} {
    display: flex;
    overflow-x: auto;

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
    width: 290px;
    min-width: 290px;
    padding: 1em;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 2.5em;

  @media ${device.mobile} {
    margin-bottom: 1.5em;
  }

  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 35px;

  @media ${device.mobile} {
    line-height: 28px;
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
                  src={`${asset_prefix}/assets/HomePage/green.svg`}
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
