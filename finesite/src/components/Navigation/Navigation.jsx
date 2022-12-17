import { Flex, Text, useDisclosure, IconButton, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navData from "./navData.json";
import { customTheme } from "../../assets/customTheme";
import SVGLogo from "../ui/SVG/SVGLogo";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navigation() {
	const { navLinks } = navData;
	const { ff } = customTheme;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box w='full'>
			<Flex
				w='full'
				alignItems='center'
				justifyContent='space-evenly'
				pt='3rem'
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
		</Box>
	);
}

// function TabletNavigation() {}

export default Navigation;
