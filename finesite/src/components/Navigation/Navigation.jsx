import goldenLogoNoText from "../../assets/images/LogoGoldenNoText.svg";
import { Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navData from "./navData.json";
import { customTheme } from "../../assets/customTheme";
import SVGLogo from "../ui/SVG/SVGLogo";
function Navigation() {
	const { navLinks } = navData;
	const { ff } = customTheme;
	return (
		<Flex
			w='full'
			alignItems='center'
			justifyContent='space-evenly'
			py='0.5rem'
		>
			{navLinks?.map((option, i) => (
				<Flex
					key={i}
					textAlign='center'
					alignItems='center'
					justifyContent='center'
				>
					{i === 2 ? (
						<Link to={option.link}>
							<SVGLogo />
						</Link>
					) : (
						<Link to={option.link}>
							<Text
								fontSize='2rem'
								color='white'
								fontFamily={ff.heading}
							>
								{option.text}
							</Text>
						</Link>
					)}
				</Flex>
			))}
		</Flex>
	);
}

export default Navigation;
