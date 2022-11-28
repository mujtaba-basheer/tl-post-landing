import styled from "styled-components";
import { starLeftPositions, starRightPositions } from "../../lib/founders";
import device from "../../styles/breakpoints";
import { CssItemProps } from "../../types";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #141620;
  padding: 6em 0;

  @media ${device.mobile} {
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

const BrandText = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #00df8d;

  @media ${device.mobile} {
    font-size: 1.25rem;
    margin-bottom: 0.5em;
  }
`;

const BigHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 76px;
  margin-bottom: 1em;

  @media ${device.mobile} {
    font-size: 2rem;
    line-height: 38px;
    margin-bottom: 1.2em;
  }
`;

const AboutHeading = styled.h4`
  font-size: 1.5rem;
  font-size: 600;
  margin-bottom: 1em;

  @media ${device.mobile} {
    font-size: 1.125rem;
  }
`;

const AboutPara = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 25.2px;
  max-width: 540px;

  @media ${device.mobile} {
    font-size: 0.875rem;
  }
`;

const FoundersContainer = styled.div`
  display: flex;
  gap: 4em;
  margin-top: 7.5em;

  @media ${device.mobile} {
    display: block;
  }
`;

const Founder = styled.div`
  position: relative;

  @media ${device.mobile} {
    &:first-child {
      margin-bottom: 7.5em;
    }
  }
`;

const BlueRect = styled.div`
  position: relative;
  background-color: #2031ae;
  border-radius: 30px;
  height: 240px;
  width: 340px;
  margin-bottom: 2em;

  @media ${device.mobile} {
    width: auto;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  height: 300px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const FounderDetails = styled.div`
  width: 340px;

  & h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.35em;

    @media ${device.mobile} {
      font-size: 1.25rem;
    }
  }

  & h4,
  p {
    font-size: 1.25rem;
    font-weight: 400;

    @media ${device.mobile} {
      font-size: 1rem;
    }
  }

  & h4 {
    margin-bottom: 1em;
  }
`;

const Star = styled.img<CssItemProps>`
  position: absolute;
  display: block;
  top: ${(props) => (props.top ? `${props.top}px` : "auto")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}px` : "auto")};
  left: ${(props) => (props.left ? `${props.left}px` : "auto")};
  right: ${(props) => (props.right ? `${props.right}px` : "auto")};
  height: ${(props) => `${props.size}px`};
  width: auto;
`;

const Founders: () => JSX.Element = () => {
  return (
    <StyledSection>
      <SectionContent>
        <BrandText>Trading Leagues</BrandText>
        <BigHeading>
          Built by World Class
          <br />
          Entrepreneurs
        </BigHeading>
        <AboutHeading>About Us</AboutHeading>
        <AboutPara>
          TradingLeagues is a product by Rain Platforms, founded by Raghu Kumar
          and Harsh Agarwal. Prior to Rain, Raghu founded Upstox, India's
          largest stock brokerage. Harsh founded AGacquisitions, one of India's
          first offshore hedge funds
        </AboutPara>
        <FoundersContainer>
          <Founder>
            <BlueRect>
              <StyledImage
                src={`${asset_prefix}/assets/founders/Raghu@1x.png`}
                alt="Raghu Kumar"
              />
            </BlueRect>
            <FounderDetails>
              <h3>Raghu Kumar</h3>
              <h4>Co-founder of Rain Platforms</h4>
              <p>
                Prior to Rain, Raghu founded Upstox, India’s largest stock
                brokerage.
              </p>
            </FounderDetails>

            {starLeftPositions.map((x, i) => (
              <Star
                key={i}
                src={`${asset_prefix}/assets/founders/star.svg`}
                alt="star"
                {...x}
              />
            ))}
          </Founder>
          <Founder>
            <BlueRect>
              <StyledImage
                src={`${asset_prefix}/assets/founders/Harsh@1x.png`}
                alt="Harsh Agarwal"
              />
            </BlueRect>
            <FounderDetails>
              <h3>Harsh Agarwal</h3>
              <h4>Co-founder of Rain Platforms</h4>
              <p>
                Harsh founded AGacquistions, one of the India’s first offshore
                hedge funds.
              </p>
            </FounderDetails>
            {starRightPositions.map((x, i) => (
              <Star
                key={i}
                src={`${asset_prefix}/assets/founders/star.svg`}
                alt="star"
                {...x}
              />
            ))}
          </Founder>
        </FoundersContainer>
      </SectionContent>
    </StyledSection>
  );
};

export default Founders;
