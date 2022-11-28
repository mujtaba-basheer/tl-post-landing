import styled from "styled-components";
import { whyPlayDetails } from "../../../lib/why-play";
import device from "../../../styles/breakpoints";

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
  width: 75vw;
  color: #ffffff;

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const BigHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.5em;

  @media ${device.mobile} {
    font-size: 1.875rem;
    line-height: 36px;
  }
`;

const GridContainer = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(3, 260px);
  column-gap: 6em;

  @media ${device.mobile} {
    display: block;
  }
`;

const GridItem = styled.div`
  @media ${device.mobile} {
    margin-bottom: 2em;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: 500;

    @media ${device.mobile} {
      font-size: 1rem;
    }
  }

  & img {
    display: block;
    margin: 2em 0;

    @media ${device.mobile} {
      width: 100%;
      height: auto;
      margin: 1em 0;
    }
  }

  & p {
    font-size: 1.25rem;
    font-weight: 400;

    @media ${device.mobile} {
      font-size: 1rem;
    }
  }
`;

const Instructions: () => JSX.Element = () => {
  return (
    <StyledSection>
      <SectionContent>
        <BigHeading>How to install TradingLeagues App</BigHeading>
        <GridContainer>
          <GridItem>
            <h3>Step 01</h3>
            <img
              src={`${asset_prefix}/assets/HomePage/instructions.png`}
              alt="mockup"
            />
            <p>Click on the link to download and Press “Ok”</p>
          </GridItem>
          <GridItem>
            <h3>Step 02</h3>
            <img
              src={`${asset_prefix}/assets/HomePage/instructions.png`}
              alt="mockup"
            />
            <p>Open “Settings” and turn on unknown sources</p>
          </GridItem>
          <GridItem>
            <h3>Step 03</h3>
            <img
              src={`${asset_prefix}/assets/HomePage/instructions.png`}
              alt="mockup"
            />
            <p>Click TradingLeagues.apk file to install</p>
          </GridItem>
        </GridContainer>
      </SectionContent>
    </StyledSection>
  );
};

export default Instructions;
