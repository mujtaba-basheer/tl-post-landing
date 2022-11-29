import styled from "styled-components";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import device from "../../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #ffffff;
  padding: 6em 0;

  @media ${device.mobile} {
    padding: 3em 0;
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
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25em;

  @media ${device.mobile} {
    font-size: 1.125rem;
  }
`;

const GridContainer = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 2em;

  @media ${device.mobile} {
    gap: 1em;
  }
`;

const Comma = styled.img`
  display: block;
  position: relative;
  top: 14px;

  @media ${device.mobile} {
    width: 40px;
    height: auto;
    top: 11px;
  }
`;

const TestimonialGrid = styled.div<{
  ref: MutableRefObject<HTMLDivElement | null>;
}>`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "a b" "a c";
  row-gap: 3em;

  @media ${device.mobile} {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    scrollbar-width: none;
  }
`;

const GridItem = styled.div<{ area: string }>`
  grid-area: ${(props) => props.area};

  @media ${device.mobile} {
    width: calc(90vw - 40px - 1em);
    min-width: calc(90vw - 40px - 1em);
    scroll-snap-align: center;
  }
`;

const TestimonialText = styled.p<{ main?: boolean }>`
  max-width: 440px;
  font-size: ${(props) => (props.main ? "2.25rem" : "1.125rem")};
  font-weight: ${(props) => (props.main ? "600" : "400")};
  line-height: ${(props) => (props.main ? "50px" : "25px")};

  @media ${device.mobile} {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 36px;
  }
`;

const Profile = styled.div`
  display: flex;
  margin-top: 1.5em;

  & div.img {
    margin-right: 1em;
  }

  & div.text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & h3 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    & h4 {
      font-size: 1.125rem;
      font-weight: 500;
      color: #2031ae;
    }
  }
`;

const Pagination = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    gap: 0.3em;
    grid-column: 2 / 3;
    margin-top: 0.5em;

    & > div {
      width: 5px;
      height: 5px;
      transition: width 200ms ease-out;

      /* Grayscale/Grayscale 3 */
      background: #9ea0aa;
      border-radius: 100px;

      /* Inside auto layout */
      flex: none;
      order: 3;
      flex-grow: 0;

      &.active {
        width: 28px;
      }
    }
  }
`;

const Testimonials: () => JSX.Element = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const swiper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiper.current) {
      let options: IntersectionObserverInit = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1.0,
      };
      let callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            const dataSl = entry.target.getAttribute("data-sl");
            if (dataSl) {
              const sl = Number(dataSl);
              setActiveSlide(sl);
            }
          }
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
        });
      };

      let observer = new IntersectionObserver(callback, options);
      let targets = swiper.current.querySelectorAll(".grid-item");
      targets.forEach((target) => observer.observe(target));
    }
  }, [swiper.current]);

  return (
    <StyledSection>
      <SectionContent>
        <BigHeading>See what people are talking about us</BigHeading>
        <GridContainer>
          <Comma src={`${asset_prefix}/assets/HomePage/comma.svg`} />
          <TestimonialGrid ref={swiper}>
            <GridItem area="a" className="grid-item" data-sl="0">
              <TestimonialText main={true}>
                I love playing TradingLeagues, it is so addictive and fun! I can
                play it for free and earn money everyday!
              </TestimonialText>
              <Profile>
                <div className="img">
                  <img
                    src={`${asset_prefix}/assets/HomePage/profile.png`}
                    alt="profile"
                  />
                </div>
                <div className="text">
                  <h3>Ankur Desai</h3>
                  <h4>₹12 Lakh Earnings</h4>
                </div>
              </Profile>
            </GridItem>
            <GridItem area="b" className="grid-item" data-sl="1">
              <TestimonialText>
                I love playing TradingLeagues, it is so addictive and fun! I can
                play it for free and earn money everyday!
              </TestimonialText>
              <Profile>
                <div className="img">
                  <img
                    src={`${asset_prefix}/assets/HomePage/profile.png`}
                    alt="profile"
                  />
                </div>
                <div className="text">
                  <h3>Ankur Desai</h3>
                  <h4>₹12 Lakh Earnings</h4>
                </div>
              </Profile>
            </GridItem>
            <GridItem area="c" className="grid-item" data-sl="2">
              <TestimonialText>
                I love playing TradingLeagues, it is so addictive and fun! I can
                play it for free and earn money everyday!
              </TestimonialText>
              <Profile>
                <div className="img">
                  <img
                    src={`${asset_prefix}/assets/HomePage/profile.png`}
                    alt="profile"
                  />
                </div>
                <div className="text">
                  <h3>Ankur Desai</h3>
                  <h4>₹12 Lakh Earnings</h4>
                </div>
              </Profile>
            </GridItem>
          </TestimonialGrid>
          <Pagination>
            {[...new Array(3)].map((x, i) => (
              <div key={i} className={activeSlide === i ? "active" : ""}></div>
            ))}
          </Pagination>
        </GridContainer>
      </SectionContent>
    </StyledSection>
  );
};

export default Testimonials;
