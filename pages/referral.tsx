/** @format */

import { FormEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import device from "../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.main`
  background-color: #1a1c2b;
  padding: 6em 0;
  height: 100vh;

  @media ${device.mobile} {
    padding: 5em 0;
  }
`;

const ContentContainer = styled.div`
  width: max(50vw, 710px);
  height: 100%;
  margin: 0 auto;
  color: #c9cad0;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 90vw;
    display: block;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 0.5em;
`;

const StyledSubtext = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1em;

  @media ${device.mobile} {
    font-size: 0.875rem;
  }
`;

const MobileText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 22.4px;
  margin-bottom: 1em;

  @media ${device.mobile} {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 3em;
  margin-top: auto;

  & picture {
    width: 100%;

    & img {
      width: 100%;
      height: auto;
    }
  }
`;

const StyledForm = styled.form`
  display: none;
  background-color: #282b43;
  border-radius: 16px;
  padding: 1.5em;

  @media ${device.mobile} {
    display: block;
  }
`;

const InputContainer = styled.div`
  padding: 0 0.5em 1em 0.5em;
  border-bottom: 1px solid #484b5f;
  display: flex;
  gap: 1em;

  & span {
    display: inline-block;

    &.prefix {
      font-size: 0.875rem;
      font-weight: 400;
    }

    &.bar {
      width: 1px;
      background-color: #ffffff;
    }
  }

  & input {
    background-color: transparent;
    outline: none;
    border: none;
    color: #ffffff;
  }
`;

const SubmitBtn = styled.input`
  background-color: #00df8d;
  border-radius: 100px;
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  width: 100%;
  padding: 1em 0;
  margin-top: 3em;
`;

const Referral = () => {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
  };

  useEffect(() => {
    const s = window.location.search;
    if (s) {
      const sp = new URLSearchParams(s);
      const code = sp.get("referral_code");
      if (code) setReferralCode(code);
    }
  }, []);

  return (
    <StyledSection>
      <ContentContainer>
        <LogoContainer>
          <picture>
            <source
              srcSet={`${asset_prefix}/assets/referral/TL_Logo_small.svg`}
              media={`${device.mobile}`}
            />
            <source srcSet={`${asset_prefix}/assets/referral/TL_Logo.svg`} />
            <img
              src={`${asset_prefix}/assets/referral/TL_Logo.svg`}
              alt="logo"
            />
          </picture>
        </LogoContainer>
        <StyledSubtext>Earn reward when you sign up!</StyledSubtext>
        <MobileText>
          Please open this link from your mobile device.
          <br />
          tradingleagues.in/referral_link
        </MobileText>
        <ImageContainer>
          <picture>
            <source
              srcSet={`${asset_prefix}/assets/referral/mobile/Referral-Illustration-Mobile@4x.png`}
              media={`${device.mobile}`}
            />
            <source
              srcSet={`${asset_prefix}/assets/referral/desktop/Referral-Illustration-Desktop@4x.png`}
            />
            <img
              src={`${asset_prefix}/assets/referral/desktop/Referral-Illustration-Desktop@4x.png`}
              alt="logo"
            />
          </picture>
        </ImageContainer>
        <StyledForm onSubmit={onSubmit}>
          <InputContainer>
            <span className="prefix">+91</span>
            <span className="bar"></span>
            <input id="mobile" type="text" pattern="[0-9]{10}" />
          </InputContainer>
          <SubmitBtn type="submit" value="continue" />
        </StyledForm>
      </ContentContainer>
    </StyledSection>
  );
};

export default Referral;
