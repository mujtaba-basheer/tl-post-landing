import styled from "styled-components";
import { useState, useEffect } from "react";
import { faqTabLinks, faqDetailsData } from "../../lib/rules-and-faqs";
import { FaqDetailsType } from "../../types";
import device from "../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #ffffff;
  padding: 6em 0;

  @media ${device.mobile} {
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: min(80vw, 1400px);
  color: #15182c;

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const BigHeading = styled.h2`
  color: #15182c;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 76px;
  margin-bottom: 1em;

  @media ${device.mobile} {
    font-size: 2.5rem;
    line-height: 48px;
  }
`;

const FaqLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;

  @media ${device.mobile} {
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5em 0;
    gap: 1.6em;

    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    scrollbar-width: none;
  }
`;

const FaqLinkItem = styled.button<{ "data-active": boolean }>`
  font-size: 1.25rem;
  font-weight: 400;
  background: none;
  border: none;
  font-family: inherit;
  color: ${(props) => (props["data-active"] ? "#00DF8D" : "#15182C")};
  text-transform: capitalize;
  letter-spacing: 0.1em;
  cursor: pointer;

  @media ${device.mobile} {
    min-width: max-content;
    width: max-content;
    font-size: 1rem;
    font-weight: ${(props) => (props["data-active"] ? "700" : "400")};
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
  grid-column: 1 / 4;
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
  // height: 446px;
`;

const Faqs = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    margin-bottom: 1.5em;
  }
`;

const FaqItem = styled.div`
  font-size: 1.25rem;
  border-bottom: 1px solid #484b5f;
  padding: 1em 0;

  @media ${device.mobile} {
    font-size: 1rem;
    border-bottom: 1px solid #484b5f;
  }

  &:first-child {
    padding-top: 0;
  }

  & h3 {
    font-weight: 600;
  }

  & p {
    font-weight: 400;
  }
`;

const FaqItemHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;

  & h2 {
    font-size: 1.6rem;
    font-weight: 600;

    @media ${device.mobile} {
      font-size: 1.125rem;
      line-height: 25.2px;
    }
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
  }

  &.active {
    &.active + p {
      padding: 1em 0;
      max-height: 500px;
    }
  }

  &:first-child {
    padding-top: 0;
  }
`;

const FaqAnswer = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  width: calc(100% - 32px);
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease-in-out;

  @media ${device.mobile} {
    line-height: 28px;
  }

  & h3 {
    font-size: 1em;
  }

  & ol,
  ul {
    padding-left: 1em;
    margin: 0.5em 0;

    & li:not(:last-child) {
      margin-bottom: 0.5em;
    }
  }
`;

const FAQs: () => JSX.Element = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentQues, setCurrentQues] = useState<number>(0);
  const [faqDetails, setFaqDetails] = useState<FaqDetailsType>(
    faqDetailsData[currentTab]
  );

  useEffect(() => {
    setFaqDetails({ ...faqDetails, state: "exiting" });
    setTimeout(() => {
      setFaqDetails({ ...faqDetailsData[currentTab], state: "entering" });
    }, 200);
  }, [currentTab]);

  return (
    <StyledSection>
      <SectionContent>
        <BigHeading>FAQs</BigHeading>
        <MainContent>
          <LeftSection className={faqDetails.state}>
            <FaqLinks>
              {faqTabLinks.map((x, i) => (
                <FaqLinkItem
                  key={x.key}
                  data-active={currentTab === i}
                  onClick={() => setCurrentTab(i)}
                >
                  {x.title}
                </FaqLinkItem>
              ))}
            </FaqLinks>
          </LeftSection>
          <RightSection>
            {faqDetailsData[currentTab] && (
              <Faqs>
                {faqDetails.faqs.map((x, i) => (
                  <FaqItem key={i}>
                    <FaqItemHead className={currentQues === i ? "active" : ""}>
                      <h2>{x.question}</h2>
                      <button
                        onClick={(ev) => {
                          let setIndex = i;
                          if (currentQues === i) setIndex = -1;
                          setCurrentQues(setIndex);
                        }}
                      >
                        <img
                          src={`${asset_prefix}/assets/faqs/${
                            currentQues === i ? "minus" : "plus"
                          }.svg`}
                        />
                      </button>
                    </FaqItemHead>
                    {x.isMdn ? (
                      <FaqAnswer
                        dangerouslySetInnerHTML={{ __html: x.answer }}
                      />
                    ) : (
                      <FaqAnswer>{x.answer}</FaqAnswer>
                    )}
                  </FaqItem>
                ))}
              </Faqs>
            )}
          </RightSection>
        </MainContent>
      </SectionContent>
    </StyledSection>
  );
};

export default FAQs;
