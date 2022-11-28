/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import device from "../../styles/breakpoints";
import { socialLinksData } from "../../lib/social";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.footer`
  color: white;
  background: url(${asset_prefix}/assets/Footer/BG.png);
  background-size: cover;
  padding: 4em 6em;

  @media ${device.mobile} {
    padding: 3em 1em;
  }
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media ${device.mobile} {
    display: block;
  }
`;

const Row1 = styled.div`
  & > img {
    margin-bottom: 1.5em;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4em;

  @media ${device.mobile} {
    display: block;
    margin-bottom: 3em;
  }
`;

const InputArea = styled.div`
  /* border: 1px solid red; */
  height: 44px;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 0.5em;
  background: rgba(255, 255, 255, 0.1);

  & input {
    font-size: 1.125rem;
    font-weight: 400;
    color: #fff;
    padding: 0.3rem 0.5rem;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    border-radius: 30px;
  }
`;

const GETLINKBTN = styled.button`
  background: #00df8d;
  border-radius: 44px;
  border: none;
  height: 44px;
  padding: 0 0.8rem;
  position: relative;
  text-align: center;
  color: #15182c;
  font-size: 14px;
  font-family: "Barlow";
  font-weight: 500;
  left: calc(-22px - 0.5em);

  @media ${device.mobile} {
    left: auto;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1em;
  }
`;

const DownLoadAppContainer = styled.div`
  display: flex;
  gap: 1.5em;

  @media ${device.mobile} {
    margin-bottom: 2em;
  }
`;

const Row2 = styled.div``;

const PageLinksContainer = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3em;
  margin-bottom: 3em;

  & div.links-box {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .links_box_title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

const LinksItems = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  color: currentColor;
`;

const SocialLinksContainer = styled.div`
  font-family: "Inter", sans-serif;

  @media ${device.mobile} {
    display: none;
  }

  & p {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const LinksContainer = styled.div`
  margin-top: 1.5rem;
  /* border: 1px solid red; */

  display: flex;
  gap: 1em;
`;

const Row3 = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  .icons {
    margin-right: 0.5rem;
  }
  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  .connect-us-items {
    display: flex;
    flex-direction: row;
  }
  .details {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    max-width: 200px;

    & a {
      text-decoration: none;
      color: currentColor;
    }
  }
`;

const TradeMarkArea = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 3em;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile} {
    padding-top: 1.5em;
    display: block;
  }

  & p.tm {
    font-size: 1rem;
    font-weight: 400;
  }

  & div.below-footer-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 2em;

    @media ${device.mobile} {
      justify-content: space-between;
      margin-bottom: 1.5em;
    }

    & a {
      text-decoration: none;
      color: currentColor;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <MainArea>
        <Row1>
          <Image
            src={`${asset_prefix}/assets/Footer/TL-Logo.svg`}
            width={200}
            height={34}
            alt="logo"
          />
          <InputContainer>
            <InputArea>
              <input placeholder="Enter Mobile Number"></input>
            </InputArea>
            <GETLINKBTN>GET DOWNLOAD LINK</GETLINKBTN>
          </InputContainer>
          <DownLoadAppContainer>
            <Image
              src={`${asset_prefix}/assets/HomePage/App_Store.webp`}
              width={150}
              height={50}
              alt="logo"
            />
            <Image
              src={`${asset_prefix}/assets/HomePage/Play_Store.webp`}
              width={150}
              height={50}
              alt="logo"
            />
          </DownLoadAppContainer>
        </Row1>
        <Row2>
          <PageLinksContainer>
            <div className="links-box">
              <div className="links_box_title">How To Play</div>
              <LinksItems href="/rules-and-faqs#rules">Rules</LinksItems>
              <LinksItems href="/rules-and-faqs#faqs">FAQs</LinksItems>
            </div>
            <div className="links-box">
              <div className="links_box_title">About Us</div>
              <LinksItems href="/about-us">Our Mission</LinksItems>
            </div>
          </PageLinksContainer>
          <SocialLinksContainer>
            <p>Connect Us</p>
            <LinksContainer>
              {socialLinksData.map((x) => (
                <Link href={x.url} target="_blank" key={x.key}>
                  <Image
                    key={x.key}
                    src={`${asset_prefix}/assets/Footer/${x.img}.svg`}
                    width={30}
                    height={30}
                    alt={x.title}
                    title={x.title}
                  />
                </Link>
              ))}
            </LinksContainer>
          </SocialLinksContainer>
        </Row2>
        <Row3>
          <p className="title">Contact Us</p>
          <div className="connect-us-items">
            <span className="icons">
              <Image
                src={`${asset_prefix}/assets/Footer/Call.svg`}
                width={24}
                height={24}
                alt="call-icon"
              />
            </span>
            <p className="details">
              <Link href="tel:+91 8923456789">+91 8923456789</Link>
            </p>
          </div>
          <div className="connect-us-items">
            <span className="icons">
              <Image
                src={`${asset_prefix}/assets/Footer/Email.svg`}
                width={24}
                height={24}
                alt="call-icon"
              />
            </span>
            <p className="details">
              <Link href="mailto:tradingleagues@gmail.com">
                tradingleagues@gmail.com
              </Link>
            </p>
          </div>
          <div className="connect-us-items">
            <span className="icons">
              <Image
                src={`${asset_prefix}/assets/Footer/Location.svg`}
                width={24}
                height={24}
                alt="call-icon"
              />
            </span>
            <p className="details">
              1A, first floor, Eve Garden, Indira Nagar, Bangalore, Karnataka
            </p>
          </div>
        </Row3>
      </MainArea>
      <TradeMarkArea>
        <div className="below-footer-links">
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
        <p className="tm">© 2022, Rain Platforms Inc. All rights reserved.</p>
      </TradeMarkArea>
    </Container>
  );
}

export default Footer;
