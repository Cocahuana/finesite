import { Flex, Box } from "@chakra-ui/react";
import SVGLogo from "../ui/SVG/SVGLogo";
import { customTheme } from "../../assets/customTheme.js";
function Footer() {
	const info1 = [
		"Text Text Text Te",
		"Text Text Text",
		"Text Text Text Text Te ",
		"Text Text T",
		"Text Text",
	];
	const info2 = [
		"Text Text Text Text Te",
		"Text Text Text Text ",
		"Text Text Te",
		"Text Text Text Text ",
		"Text Text Text Text Text T ",
		"Text Text Text Text ",
	];
	const info3 = [
		"Text Text  ",
		"Text Text Text Text",
		"Text Text Te ",
		"Text Text Text Text ",
		"Text Text Text T",
	];
	const info4 = [
		"Text Text Text Te",
		"Text Text Text",
		"Text Text Text Text Te ",
	];

	return (
		<>
			<Flex
				w='full'
				bg='black'
				h='60vh'
				alignItems='flex-start'
				justifyContent='space-evenly'
				color={customTheme.text.complementary2}
				fontWeight={700}
				fontSize={{ base: "1rem", md: "1.5rem" }}
				fontFamily={customTheme.ff.heading}
				pt='4.25rem'
				px={{ base: "2rem", lg: "0" }}
			>
				<Flex
					alignItems='flex-start'
					justifyContent='center'
					flexDirection='column'
					bg={{ base: "red", lg: "blue" }}
				>
					{info1.map((data, i) => (
						<Box my='1rem'>{data}</Box>
					))}
					<Box mt='6rem' ml='-1rem'>
						<SVGLogo type='white' />
					</Box>
				</Flex>
				<Flex
					alignItems='flex-start'
					justifyContent='center'
					flexDirection='column'
				>
					{info2.map((data) => (
						<Box my='1rem'>{data}</Box>
					))}
				</Flex>

				<Flex
					alignItems='flex-start'
					justifyContent='center'
					flexDirection='column'
				>
					{info3.map((data) => (
						<Box my='1rem'>{data}</Box>
					))}
				</Flex>
				<Flex h='77%' alignItems='flex-end'>
					<Flex
						alignItems='flex-start'
						justifyContent='center'
						flexDirection='column'
					>
						{info4.map((data) => (
							<Box my='1rem'>{data}</Box>
						))}
					</Flex>
				</Flex>
			</Flex>{" "}
		</>
	);
}

export default Footer;
