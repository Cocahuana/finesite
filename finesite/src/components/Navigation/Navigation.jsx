import goldenLogoNoText from "../../assets/images/LogoGoldenNoText.svg";
import { Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navData from "./navData.json";
function Navigation() {
	const { navLinks } = navData;
	return (
		<Flex
			w='full'
			alignItems='center'
			justifyContent='space-evenly'
			py='0.5rem'
		>
			{navLinks?.map((option, i) => (
				<Flex
					textAlign='center'
					alignItems='center'
					justifyContent='center'
				>
					{i === 2 ? (
						<Link to={option.link}>
							<Image
								w='7rem'
								h='4.2rem'
								src={goldenLogoNoText}
								alt='Main logo'
							/>
						</Link>
					) : (
						<Link to={option.link}>
							<Text fontSize='2rem' color='white'>
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
