import {
	Flex,
	Text,
	useDisclosure,
	IconButton,
	Box,
	Spacer,
	Collapse,
	Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navData from "../../data/navData.json";
import { customTheme } from "../../assets/customTheme";
import SVGLogo from "../ui/SVG/SVGLogo";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navigation() {
	const { navLinks } = navData;
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
	const { ff } = customTheme;
	const items = navLinks?.map((option, i) => (
		<Flex
			key={i}
			textAlign='center'
			alignItems='center'
			justifyContent='center'
		>
			{i === 2 ? (
				<Box display={{ base: "none", xl: "block" }}>
					<Link to={option.link}>
						<SVGLogo />
					</Link>
				</Box>
			) : (
				<Box w='100%' h='100%'>
					<Link to={option.link}>
						<Text
							fontSize={{ base: "0.8125rem", xl: "2rem" }}
							color='white'
							fontFamily={ff.heading}
						>
							{option.text}
						</Text>
					</Link>
				</Box>
			)}
		</Flex>
	));
	return (
		<Box w='full' h='10vh' position='relative' zIndex='1'>
			<Flex
				display={{ base: "flex", xl: "none" }}
				w='full'
				h='100%'
				alignItems='center'
			>
				<Flex w='100%' px='35px' alignItems='center' h='100%'>
					<Link to={navLinks[2].link}>
						<SVGLogo />
					</Link>
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
				<Stack bg='yellow.500' p={4} display={{ xl: "none" }}>
					{items}
				</Stack>
			</Collapse>
			<Flex
				alignItems='center'
				justifyContent='space-evenly'
				w='full'
				pt='3rem'
				display={{ base: "none", xl: "flex" }}
				h='100%'
			>
				{items}
			</Flex>
		</Box>
	);
}

export default Navigation;
