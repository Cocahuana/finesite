import styled from "styled-components";
import { customTheme } from "../../../assets/customTheme";
const CustomButtom = styled.button`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => props.fontSize};
	width: ${(props) => props.w};
	text-decoration: none;
	transition: ${(props) => props.transition};
	padding: ${(props) => props.p};
	line-height: ${(props) => props.lineHeight};
	font-weight: ${(props) => props.fontWeight};
	&:hover {
		background-color: ${(props) => props.bgHover};
	}
`;

CustomButtom.defaultProps = {
	bg: customTheme.bg.accent,
	bgHover: customTheme.bg.complementary,
	color: customTheme.text.black,
	fontFamily: customTheme.ff.base,
	fontSize: "1.5rem",
	w: "10rem",
	transition: "all 0.5s ease",
	p: "6px",
	lineHeight: "30px",
	fontWeight: "700",
};
function Button(props) {
	const { children } = props;
	return (
		<>
			<CustomButtom as='a' href='#'>
				{children}
			</CustomButtom>
		</>
	);
}

export default Button;
