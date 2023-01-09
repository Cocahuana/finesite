import {
	Flex,
	Text,
	useDisclosure,
	IconButton,
	Box,
	Spacer,
	Collapse,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navData from "../../data/navData.json";
import { customTheme } from "../../assets/customTheme";
import SVGLogo from "../ui/SVG/SVGLogo";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navigation() {
	const { navLinks } = navData;
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

	return (
		<Box w='full' h='10vh'>
			<Flex
				display={{ base: "flex", xl: "none" }}
				w='full'
				h='100%'
				alignItems='center'
			>
				<Flex w='100%' px='35px' alignItems='center' h='100%'>
					<SVGLogo />
					<Spacer />
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? (
								<CloseIcon w={5} h={5} />
							) : (
								<HamburgerIcon w={"44px"} h={"44px"} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<NavItems navItems={navLinks} />
			</Collapse>
			<Flex
				w='full'
				alignItems='center'
				justifyContent='space-evenly'
				pt='3rem'
				display={{ base: "none", xl: "flex" }}
			>
				<NavItems navItems={navLinks} />
			</Flex>
		</Box>
	);
}

const NavItems = ({ navItems }) => {
	const { ff } = customTheme;
	return (
		<>
			{navItems?.map((option, i) => (
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
								fontSize={{ base: "0.8125rem", xl: "2rem" }}
								color='white'
								fontFamily={ff.heading}
							>
								{option.text}
							</Text>
						</Link>
					)}
				</Flex>
			))}
		</>
	);
};

export default Navigation;
