import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import device from "../../../styles/breakpoints";
import { navLinksData } from "../../../lib/navbar";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const NavContainer = styled.nav`
  background-color: transparent;
`;

const NavbarContent = styled.div`
  // width: 80vw;
  margin: 0 auto;
  color: #15182c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media ${device.mobile} {
  }
`;

const LogoContainer = styled.a`
  @media ${device.mobile} {
    height: 24px;
  }

  & img {
    @media ${device.mobile} {
      height: 100%;
      width: auto;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;

  @media ${device.mobile} {
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    max-height: 0;
    overflow-y: hidden;
    right: 0;
    top: 42px;
    z-index: 5;
    background-color: #fbfbff;
    transition: max-height 300ms ease-out;
  }
`;

const Menu = styled.button`
  display: none;
  padding: 0.5em;
  background: none;
  border: none;
  cursor: pointer;

  @media ${device.mobile} {
    display: block;
  }

  &.open + div {
    max-height: 162px;
    border: 2px solid #15182c;
    border-top: none;
  }

  & img {
    pointer-events: none;
  }
`;

const LinkItem = styled(Link)<{ "data-active": boolean }>`
  text-decoration: none;
  color: ${(props) => (props["data-active"] ? "#00DF8D" : "currentColor")};
  font-size: 1rem;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 0.875rem;
    margin: 0 1em;

    &:first-child {
      margin-top: 1em;
    }
  }
`;

const WalletLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: currentColor;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #15182c;
  border-radius: 100px;
  padding: 0.5em 1.5em;

  @media ${device.mobile} {
    font-size: 0.875rem;
    padding: 0.4em 1em;

    &:last-child {
      margin: 0 1em;
      margin-bottom: 1em;
    }
  }
`;

const Navbar: () => JSX.Element = () => {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <NavContainer>
      <NavbarContent>
        <LogoContainer href="/">
          <img src={`${asset_prefix}/assets/HomePage/TL_Logo.svg`} alt="logo" />
        </LogoContainer>
        <Menu
          onClick={(ev) =>
            (ev.target as HTMLButtonElement).classList.toggle("open")
          }
        >
          <img src={`${asset_prefix}/assets/navbar/menu.svg`} alt="hamburger" />
        </Menu>
        <LinksContainer>
          {navLinksData.map((x) => (
            <LinkItem
              href={x.key}
              key={x.key}
              target={x.target || "_self"}
              data-active={x.key === pathname}
            >
              {x.title}
            </LinkItem>
          ))}
          <WalletLink href="/wallet">wallet</WalletLink>
        </LinksContainer>
      </NavbarContent>
    </NavContainer>
  );
};

export default Navbar;
