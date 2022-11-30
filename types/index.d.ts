/** @format */

import React from "react";

export type InfoItemType = {
	heading: string;
	para: string;
};

export type SocialDataItem = {
	title: string;
	url: string;
};

export type CssItemProps = {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
	rotation?: number;
	size: number;
};

export type TabLinkType = {
	title: string;
	key: string;
};

export type LeagueDetailsType = {
	heading: string;
	key: string;
	main: string;
	para: string;
	qnas: {
		q: string;
		a: string;
	}[];
	color: string;
	img_file: string;
	vid_file: string;
	state?: string;
};

export type FaqItemType = {
	question: string;
	answer: string;
	isMdn?: boolean;
};

export type FaqDetailsType = {
	key: string;
	faqs: FaqItemType[];
	state?: string;
};

export type TypingDetail = {
	w1: string;
	w2: string;
};

export type ApiResponseType = {
	status: "success" | "failure";
	message: string;
	data: number;
	waitlist: number;
	invite: 0 | 1;
};

type FormStatus = "success" | "failure" | "";

export type PopupProps = {
	mobile: string;
	wailist_no: number;
	open_modal: boolean;
	status: [FormStatus, FormStatus, FormStatus];
	loading: [boolean, boolean, boolean];
};

export type SocialLinksType = {
	title: string;
	key: string;
	url: string;
	img: string;
};

export type NavLinkType = {
	title: string;
	key: string;
	target?: string;
};

export type WhyPlayDetailType = {
	heading: string;
	para: string;
	icon: string;
};
