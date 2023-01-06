import styled from "styled-components";
import { customTheme } from "../../../assets/customTheme";
const CustomButtom = styled.button`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => props.fontSize};
	min-width: ${(props) => props.minW};
	height: ${(props) => props.h};
	text-decoration: none;
	transition: ${(props) => props.transition};
	padding: ${(props) => props.p};
	padding-left: ${(props) => props.pl || props.px};
	padding-right: ${(props) => props.pr || props.px};
	line-height: ${(props) => props.lineHeight};
	font-weight: ${(props) => props.fontWeight};
	&:hover {
		background-color: ${(props) => props.bgHover};
	}
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
`;

CustomButtom.defaultProps = {
	bg: customTheme.bg.accent,
	bgHover: customTheme.bg.complementary,
	color: customTheme.text.black,
	fontFamily: customTheme.ff.heading,
	fontSize: "1.5rem",
	minW: "225px",
	h: "4.3125rem",
	transition: "all 0.5s ease",
	lineHeight: "30px",
	fontWeight: "700",
};
function Button(props) {
	const { children, onClick } = props;
	return (
		<>
			<CustomButtom
				as='a'
				bg={props.bg}
				minW={props.minW}
				h={props.h}
				px={props.px}
				pl={props.pl}
				pr={props.pr}
				onClick={onClick}
			>
				{children}
			</CustomButtom>
		</>
	);
}

export default Button;
