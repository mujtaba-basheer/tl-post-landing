/** @format */

import styled from "styled-components";

import { coinCssDetails, starCssDetails } from "../../lib/invite";
// import { submitHandler } from "../lib/handler";
import { CssItemProps, PopupProps } from "../../types";
import device from "../../styles/breakpoints";
import { Dispatch, SetStateAction } from "react";
import Loader from "./ui/Loader";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Image = (props: CssItemProps & { src: string; alt: string }) => (
  <img {...props} />
);

const StyledSection = styled.section`
  background-color: #00df8d;
  padding: 6em 0;
  @media ${device.mobile} {
    padding: 50px 0;
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1em;

  @media ${device.mobile} {
    display: block;
  }
`;

const TopSection = styled.div`
  grid-column: 2 / 13;
`;

const BottomSection = styled.div`
  grid-column: 2 / 12;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    display: block;
  }
`;

const BigHeading = styled.h2`
  color: #15182c;
  font-size: 64px;
  font-weight: 700;
  line-height: 76.8px;
  width: 856px;
  margin-bottom: 100px;

  @media ${device.mobile} {
    font-size: 40px;
    width: auto;
    line-height: 48px;
    margin-bottom: 30px;
  }
`;

const CtaSection = styled.div`
  @media ${device.mobile} {
    margin-bottom: 4em;
  }

  & h3 {
    font-size: 40px;
    font-weight: 700;
    /* line-height: 48px; */
    margin-bottom: 14px;

    @media ${device.mobile} {
      font-size: 26px;
      line-height: 31.2px;
      margin-bottom: 10px;
    }
  }

  & p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 2.5em;
    line-height: 28px;
    width: 445px;
    margin-bottom: 42px;
    @media ${device.mobile} {
      font-size: 16px;
      line-height: 22.4px;
      width: auto;
      margin-bottom: 16px;
    }
  }
`;

const StyledForm = styled.form`
  width: max-content;
  position: relative;
  @media ${device.mobile} {
    width: auto;
  }

  & label {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    display: block;
    margin-bottom: 20px;
    @media ${device.mobile} {
      margin-bottom: 10px;
    }
  }

  & > div {
    height: 40px;
    width: 100%;
    display: flex;

    /* justify-content: space-between; */
    /* position: relative; */

    @media ${device.mobile} {
      position: relative;
      display: block;
    }

    & div.input {
      height: 100%;
      border-radius: 20px;
      background-color: #ffffff;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 1em;
      /* width: calc(100% - 20px); */
      width: 320px;

      @media ${device.mobile} {
        padding: 10.5px;
        padding-left: 18px;
        margin-bottom: 16px;
      }

      & span {
        display: inline-block;

        &.input {
          margin-left: 0.5em;
        }
      }
    }

    & input {
      display: inline-block;
      height: 100%;
      border: none;
      padding: 0 1.5em;

      @media ${device.mobile} {
        position: absolute;
        bottom: 0;
      }

      &[type="text"] {
        outline: none;
        padding: 0;
        font-size: 0.875rem;

        @media ${device.mobile} {
          position: relative;
        }

        &.failure {
          &::placeholder {
            color: red;
          }
        }
      }

      &[type="submit"] {
        border-radius: 20px;
        width: 120px;
        font-weight: 500;
        position: relative;
        margin-left: -2rem;
        background-color: #2031ae;
        text-transform: uppercase;
        color: #ffffff;
        cursor: pointer;
        @media ${device.mobile} {
          display: block;
          padding: 10.5px 16px;
          margin-left: 0;
        }
      }
    }

    & > span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-radius: 20px;
      left: -20px;
      background-color: #2031ae;
      width: 103.77px;
      right: 0;
      bottom: 0;
      padding: 5px 0;

      @media ${device.mobile} {
        position: absolute;
        left: auto;
      }
    }
  }
`;

const AdSection = styled.div`
  background-color: #ffffff;
  border: 10px solid #006640;
  margin-bottom: -6em;
  border-bottom: none;
  border-radius: 40px 0 0 0;
  width: 408px;
  padding: 2.5em 2em 5em 2em;
  position: relative;

  @media ${device.mobile} {
    width: 80%;
    margin: 0 auto -3.1em auto;
    padding: 1.5em 1.5em 6em 1.5em;
    margin-top: 80px;
  }

  & h3 {
    font-size: 64px;
    font-weight: 600;
    margin-bottom: 21px;

    @media ${device.mobile} {
      font-size: 44px;
      margin-bottom: 15px;
    }

    & span {
      font-size: 16px;
      font-weight: 500;
      font-family: "Inter";

      @media ${device.mobile} {
        font-size: 11px;
      }
    }
  }

  & p {
    font-size: 24px;
    font-weight: 500;
    line-height: 31.2px;

    @media ${device.mobile} {
      font-size: 16px;
      line-height: 21.27px;
    }

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`;

const PositionedImage = styled(Image)`
  position: absolute;
  display: block;
  top: ${(props) => (props.top ? `${props.top}px` : "auto")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}px` : "auto")};
  left: ${(props) => (props.left ? `${props.left}px` : "auto")};
  right: ${(props) => (props.right ? `${props.right}px` : "auto")};
  height: ${(props) => `${props.size}px`};
  transform: rotate(${(props) => `${props.rotation}deg`});
  width: auto;

  @media ${device.mobile} {
    height: ${(props) => `${props.msize}px`};
  }
`;

const Invite = ({
  formContext,
  setFormContext,
}: {
  formContext?: PopupProps;
  setFormContext?: Dispatch<SetStateAction<PopupProps>>;
}) => (
  <StyledSection id="refer-and-earn">
    <SectionContent>
      <TopSection>
        <BigHeading>
          Invite friends over and compete for the ultimate financial market
          glory
        </BigHeading>
      </TopSection>
      <BottomSection>
        <CtaSection>
          <h3>Refer & Earn!</h3>
          <p>
            Invite your friends & family to double the fun and compete for the
            ultimate financial market glory.
          </p>
          <StyledForm
          // onSubmit={(ev) => submitHandler(ev, 1, setFormContext)}
          >
            <label htmlFor="mobile">
              Enter your Whatsapp number to receive your unique referral link
            </label>
            <div>
              <div className="input">
                <span>+91 - </span>
                <span className="input">
                  <input
                    type="text"
                    autoComplete="off"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    placeholder={
                      formContext?.status?.[1] === "failure"
                        ? "Invalid Mobile Number"
                        : "Enter Mobile Number"
                    }
                    className={formContext?.status?.[1]}
                    name="mobile"
                    id="mobile"
                  />
                </span>
              </div>
              {formContext?.loading?.[1] ? (
                <span>
                  <Loader color="#2031AE" />
                </span>
              ) : (
                <input type="submit" value="send link" />
              )}
            </div>
          </StyledForm>
        </CtaSection>
        <AdSection>
          <h3>
            ₹100 <span>Game Credit</span>
          </h3>
          <p>Get ₹100 when you sign up</p>
          <p>Get ₹100 for every friend that downloads the app</p>

          {coinCssDetails.map((x, i) => (
            <PositionedImage
              src={`${asset_prefix}/assets/HomePage/coin.svg`}
              alt="icon"
              key={i}
              {...x}
            />
          ))}
          {starCssDetails.map((x, i) => (
            <PositionedImage
              src={`${asset_prefix}/assets/HomePage/star.svg`}
              alt="icon"
              key={i}
              {...x}
            />
          ))}
        </AdSection>
      </BottomSection>
    </SectionContent>
  </StyledSection>
);

export default Invite;
