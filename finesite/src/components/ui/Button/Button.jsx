import styled from "styled-components";
import { customTheme } from "../../../assets/customTheme";
import { Link } from "react-router-dom";
import navData from "../../../data/navData.json";
const CustomButtom = styled.button`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
	min-width: ${(props) => props.minW};
	height: ${(props) => props.h};
	text-decoration: none;
	transition: ${(props) => props.transition};
	padding: ${(props) => props.p};
	padding-left: ${(props) => props.pl || props.px};
	padding-right: ${(props) => props.pr || props.px};
	margin-left: ${(props) => props.ml || props.mx};
	margin-right: ${(props) => props.mr || props.mx};
	margin-top: ${(props) => props.mt || props.my};
	margin-bottom: ${(props) => props.mb || props.my};
	line-height: ${(props) => props.lineHeight};
	font-weight: ${(props) => props.fontWeight};
	&:hover {
		background-color: ${(props) => props.bgHover};
	}
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	cursor: pointer;
	@media (max-width: 768px) {
		min-width: 167px;
		font-size: 1rem;
		height: 42px;
		// margin-top: 75px;
	}
`;

CustomButtom.defaultProps = {
	bg: customTheme.bg.accent,
	bgHover: customTheme.bg.complementary,
	color: customTheme.text.black,
	fontFamily: customTheme.ff.heading,
	minW: "225px",
	h: "4.3125rem",
	transition: "all 0.5s ease",
	lineHeight: "30px",
	fontWeight: "700",
};
function Button(props) {
	const { children, onClick, goTo } = props;
	const { pageNotFound } = navData;
	return (
		<>
			<Link to={goTo ?? pageNotFound}>
				<CustomButtom
					as='a'
					bg={props.bg}
					minW={props.minW}
					h={props.h}
					px={props.px}
					pl={props.pl}
					pr={props.pr}
					my={props.my}
					onClick={onClick}
				>
					{children}
				</CustomButtom>
			</Link>
		</>
	);
}

export default Button;
