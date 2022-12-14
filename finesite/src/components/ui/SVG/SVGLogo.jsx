import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
	width: 113px;
	height: 79px;
	viewbox: ${(props) => props.viewBox};
	fill: "none";
	xmlns: "http://www.w3.org/2000/svg";
	@media (max-width: 768px) {
		width: 43px;
		height: 29px;
	}
`;

function SVGLogo(props) {
	// None of these logos have text
	const type = props.type ? props.type : "yellow";
	let choosenLogo;
	switch (type.toLowerCase()) {
		case "yellow":
			choosenLogo = FinesiteYellow(props);
			break;
		case "white":
			choosenLogo = FinesiteWhite(props);
			break;
		case "black":
			choosenLogo = FinesiteBlack(props);
			break;
		default:
			choosenLogo = FinesiteYellow(props);
	}
	// const choosenLogo =  === "yellow" ?
	return <>{choosenLogo}</>;
}

function FinesiteYellow(props) {
	return (
		<Svg viewBox='0 0 113 79'>
			<path
				d='M5 28.1909H108M28.1784 5V28.1909M5 51.575H108M83.8843 74V51.575M5 5H108V74H5V5Z'
				stroke='#F7DC5F'
				strokeWidth='9'
				strokeMiterlimit='10'
			/>
		</Svg>
	);
}

function FinesiteWhite(props) {
	return (
		<Svg viewBox='0 0 87 61'>
			<path
				d='M5 22.1411H82M22.3276 5V22.1411M5 39.425H82M63.9717 56V39.425M5 5H82V56H5V5Z'
				stroke='white'
				strokeWidth='9'
				strokeMiterlimit='10'
			/>
		</Svg>
	);
}

function FinesiteBlack(props) {
	return (
		<Svg viewBox='0 0 315 215'>
			<g clipPath='url(#clip0_27_574)'>
				<path
					d='M307.5 7.5H7.5V207.5H307.5V7.5Z'
					stroke='black'
					strokeWidth='15'
					strokeMiterlimit='10'
				/>
				<path
					d='M7.5 74.72H307.5'
					stroke='black'
					strokeWidth='15'
					strokeMiterlimit='10'
				/>
				<path
					d='M75.01 7.5V74.72'
					stroke='black'
					strokeWidth='15'
					strokeMiterlimit='10'
				/>
				<path
					d='M7.5 142.5H307.5'
					stroke='black'
					strokeWidth='15'
					stroke-strokeMiterlimit='10'
				/>
				<path
					d='M237.26 207.5V142.5'
					stroke='black'
					strokeWidth='15'
					stroke-strokeMiterlimit='10'
				/>
			</g>
			<defs>
				<clipPath id='clip0_27_574'>
					<rect width='315' height='215' fill='white' />
				</clipPath>
			</defs>
		</Svg>
	);
}

export default SVGLogo;
