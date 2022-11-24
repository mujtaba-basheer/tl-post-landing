/** @format */

import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
	justify-content: start;
	align-content: start;
	/* border: 1px solid red; */
	box-sizing: border-box;
	padding: 5rem 0 0 5rem;
	/* place-items: center; */
`;
const HeaderTag = styled.h1``;

const Trade = styled.span`
	color: rgba(32, 49, 174, 1);
	margin-right: 0.3rem;
	font-size: 56px;
	font-weight: 700;
`;
const On = styled.span`
	color: rgba(255, 255, 255, 1);
	margin-right: 0.3rem;
	font-size: 56px;
	font-weight: 700;
`;

const Description = styled.p`
	/* width: 60%; */
	margin-top: 1rem;
	font-size: 20px;
	font-weight: 300;
	line-height: 140%;
	color: #15182c;
`;

const GetLinkArea = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: row;
`;

const InputArea = styled.div`
	background: #ffffff;
	border-radius: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	width: 80%;
	box-sizing: border-box;
	/* width: 80%; */
	/* height: 50px; */
`;
const NumberSpan = styled.span`
	height: "100%";
	margin-right: 10px;
`;
const Input = styled.input`
	height: 150%;
	flex: 0.7;
	border: none;
	font-size: 18px;
	&:focus {
		outline: none;
	}

	/* padding: 8px 8px; */
`;
const LinkButton = styled.button`
	background: #2031ae;
	border-radius: 47px;
	position: relative;
	/* width: 201px; */
	height: 50px;
	right: 80px;
	top: 0px;
	color: #fff;
	width: 250px;
	padding: 0 11px;
	cursor: pointer;

	/* left: 400px;
	right: 400px; */
`;

const StatsArea = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 2.5rem;
`;
const StatsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Number = styled.div`
	font-weight: 700;
	font-size: 40px;
	line-height: 48px;
	color: #33364c;
`;
const About = styled.div`
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #484b5f;
`;

export default function LeftSection() {
	return (
		<Container>
			<HeaderTag>
				<Trade>Trade</Trade>
				<On>On!</On>
			</HeaderTag>
			<Description>
				TradingLeagues is a first-of-its-kind fantasy <br /> trading platform
				providing a gamified experience <br />
				of the financial markets.
			</Description>
			<GetLinkArea>
				<InputArea>
					<NumberSpan>+ 91</NumberSpan>
					<Input></Input>
				</InputArea>
				<LinkButton>GET DOWNLOAD LINK</LinkButton>
			</GetLinkArea>
			<StatsArea>
				<StatsContainer>
					<Number>12.2K+</Number>
					<About>Total Downloads</About>
				</StatsContainer>
				<StatsContainer>
					<Number>12000</Number>
					<About>Total Winnings</About>
				</StatsContainer>
				<StatsContainer>
					<Number>12,302</Number>
					<About>Total Downloads</About>
				</StatsContainer>
			</StatsArea>
		</Container>
	);
}
