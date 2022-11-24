/** @format */

import Image from "next/image";
import styled from "styled-components";
import TL_Logo from "../../assets/HomePage/TL_Logo.svg";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.div`
	display: grid;
	/* border: 1px solid blue; */
	grid-template-columns: auto 400px;
	justify-content: space-between;
	align-content: center;
`;

const Logo = styled.div`
	/* border: 1px solid red; */
`;

const MenuArea = styled.ul`
	/* border: 1px solid red; */
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LI = styled.li`
	display: inline;
`;

const WalletBtn = styled.button`
	border: 2px solid #15182c;
	border-radius: 100px;
	background: inherit;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;

const DeskTopNavBar = () => {
	return (
		<Container>
			<Logo>
				<img src={`${asset_prefix}/assets/HomePage/TL_Logo.svg`} alt="logo" />
			</Logo>
			<MenuArea>
				<LI>Rules & FAQs</LI>
				<LI>About US</LI>
				<LI>Blogs</LI>
				<LI>
					<WalletBtn>Wallet</WalletBtn>
				</LI>
			</MenuArea>
		</Container>
	);
};

const NavBar = () => {
	return <DeskTopNavBar />;
};

export default NavBar;
