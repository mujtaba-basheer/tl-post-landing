import styled from "styled-components";
import { useState, useEffect } from "react";
import { tabLinksData, leagueDetailsData } from "../../../lib/rules-and-faqs";
import { LeagueDetailsType } from "../../../types";
import device from "../../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #ffffff;
  padding: 6em 0;

  @media ${device.mobile} {
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: min(70vw, 1200px);
  color: #15182c;

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const BigHeading = styled.h2`
  color: #15182c;
  font-size: 4rem;
  font-weight: 700;
  line-height: 76px;
  margin-bottom: 1em;

  @media ${device.mobile} {
    font-size: 2.5rem;
    line-height: 48px;
  }
`;

const TabLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5em;

  @media ${device.mobile} {
    display: none;
  }
`;

const TabLinkItem = styled.button<{ "data-active": boolean }>`
  font-size: 1rem;
  font-weight: 700;
  background: none;
  border: none;
  font-family: inherit;
  color: ${(props) => (props["data-active"] ? "#00DF8D" : "#737585")};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  margin-bottom: 4em;
`;

const LeagueContentMobile = styled.div`
  padding: 0;
  max-height: 0;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 3em;
  }

  @media ${device.mobile} {
    padding-left: 0.5em;
  }
`;

const TabLinkItemMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;

  & h2 {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #737585;
  }

  & button {
    background: none;
    border: none;
  }

  &.active {
    & h2 {
      color: #00df8d;
    }

    &.active + div {
      padding: 1em 0;
      padding-left: 0.5em;
      max-height: none;
    }
  }
`;

const LeagueMobile = styled.div``;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1em;

  @media ${device.mobile} {
    display: none;
    visibility: hidden;
  }
`;

const MainContentMobile = styled.div`
  display: none;
  scroll-snap-align: end;

  @media ${device.mobile} {
    display: block;
  }
`;

const LeftSection = styled.div`
  grid-column: 1 / 7;
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
`;

const RightSection = styled.div`
  grid-column: 7 / 13;
  justify-self: end;
  position: relative;
  align-self: center;
  width: 318px;
  height: 446px;
`;

const StyledHeading = styled.h2`
  color: ${(props) => props.color};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1em;

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

const QnAs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media ${device.mobile} {
    gap: 1.5em;
    margin-bottom: 1.5em;
  }
`;

const QnA = styled.div`
  font-size: 1.25rem;

  @media ${device.mobile} {
    font-size: 1rem;
    padding-bottom: 1.5em;
    border-bottom: 1px solid rgba(169, 177, 239, 0.3);
  }

  & h3 {
    font-weight: 600;
  }

  & p {
    font-weight: 400;
  }
`;

const StyledVideo = styled.video`
  height: 100%;
  aspect-ratio: 5 / 11;
  display: block;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${device.mobile} {
    border-radius: 30px;
    position: relative;
    width: 70%;
    height: auto;
    margin-bottom: 1.5em;
    opacity: 1;
  }

  &.active {
    opacity: 1;

    &.exiting {
      opacity: 0;
    }
  }
`;

const Swiper: () => JSX.Element = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [leagueDetails, setLeagueDetails] = useState<LeagueDetailsType>(
    leagueDetailsData[currentTab]
  );

  useEffect(() => {
    setLeagueDetails({ ...leagueDetails, state: "exiting" });
    setTimeout(() => {
      setLeagueDetails({ ...leagueDetailsData[currentTab], state: "entering" });
    }, 200);
  }, [currentTab]);

  return (
    <StyledSection>
      <SectionContent>
        <BigHeading>How To Play</BigHeading>
        <TabLinks>
          {tabLinksData.map((x, i) => (
            <TabLinkItem
              key={x.key}
              data-active={currentTab === i}
              onClick={() => setCurrentTab(i)}
            >
              {x.title}
            </TabLinkItem>
          ))}
        </TabLinks>
        {leagueDetails && (
          <MainContent>
            <LeftSection className={leagueDetails.state}>
              <StyledHeading color={leagueDetails.color}>
                {leagueDetails.heading}
              </StyledHeading>
              <QnAs>
                {leagueDetails.qnas?.map((x, i) => (
                  <QnA key={i}>
                    <h3>{x.q}</h3>
                    <p>{x.a}</p>
                  </QnA>
                ))}
              </QnAs>
            </LeftSection>
            <RightSection>
              {leagueDetailsData.map((x, i) => (
                <StyledVideo
                  color={x.color}
                  className={`${
                    currentTab === i ? "active " + leagueDetails.state : ""
                  }`}
                  key={x.key}
                  muted
                  autoPlay={true}
                  loop
                  // playsInline
                  src={`${asset_prefix}/assets/swiper/${x.vid_file}.mp4`}
                />
              ))}
            </RightSection>
          </MainContent>
        )}
        <MainContentMobile>
          {leagueDetailsData.map((x, i) => (
            <LeagueMobile key={x.key}>
              <TabLinkItemMobile className={currentTab === i ? "active" : ""}>
                <h2>{x.heading}</h2>
                <button
                  onClick={(ev) => {
                    let setIndex = i;
                    if (currentTab === i) setIndex = -1;
                    setCurrentTab(setIndex);
                    setTimeout(() => {
                      (ev.target as HTMLElement).scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 200);
                  }}
                >
                  <img
                    src={`${asset_prefix}/assets/swiper/arrow-${
                      currentTab === i ? "up" : "down"
                    }.svg`}
                  />
                </button>
              </TabLinkItemMobile>
              <LeagueContentMobile>
                <StyledHeading color={x.color}>{x.heading}</StyledHeading>
                <QnAs>
                  {leagueDetails.qnas?.map((x, i) => (
                    <QnA key={i}>
                      <h3>{x.q}</h3>
                      <p>{x.a}</p>
                    </QnA>
                  ))}
                </QnAs>
                <StyledVideo
                  muted
                  autoPlay={true}
                  loop
                  // playsInline
                  src={`${asset_prefix}/assets/swiper/${x.vid_file}.mp4`}
                />
              </LeagueContentMobile>
            </LeagueMobile>
          ))}
        </MainContentMobile>
      </SectionContent>
    </StyledSection>
  );
};

export default Swiper;
