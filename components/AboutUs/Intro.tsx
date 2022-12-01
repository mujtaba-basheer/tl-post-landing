import styled from "styled-components";
import device from "../../styles/breakpoints";

const StyledSection = styled.section`
  background-color: #ffffff;
  padding: 8em 0;

  @media ${device.mobile} {
    padding: 3em 0;
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: min(70vw, 1100px);
  color: #15182c;

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const BigHeading = styled.h2`
  color: #15182c;
  font-size: 3.5rem;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1em;

  @media ${device.mobile} {
    display: block;
  }
`;

const LeftSection = styled.div`
  grid-column: 1 / 5;
  opacity: 1;
  transition: opacity 200ms ease-in;

  &.exiting {
    opacity: 0;

    & img {
      opacity: 0;
    }
  }

  &.entering {
    opacity: 1;

    & img {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    margin-bottom: 2em;
  }
`;

const RightSection = styled.div`
  grid-column: 6 / 13;
  // justify-self: end;
  position: relative;
  align-self: center;
  justify-self: flex-end;
  // height: 446px;
`;

const StyledText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 28px;
  max-width: 536px;

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

const StyledHeading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  max-width: 510px;
  line-height: 38.4px;
  margin: 0.75em 0;

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

const Intro: () => JSX.Element = () => {
  return (
    <StyledSection>
      <SectionContent>
        <MainContent>
          <LeftSection>
            <BigHeading>Our mission and vision</BigHeading>
          </LeftSection>
          <RightSection>
            <StyledText>TradingLeagues started with</StyledText>
            <StyledHeading>
              A mission to empower all users who still find hassle in stock
              trading.
            </StyledHeading>
            <StyledText>
              However, with a diverse mix of experienced investors, day traders,
              and also inexperienced users, the level of engagement per user has
              become complicated.
            </StyledText>
          </RightSection>
        </MainContent>
      </SectionContent>
    </StyledSection>
  );
};

export default Intro;
