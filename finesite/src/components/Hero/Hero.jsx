import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import ArrowDown from "../ui/SVG/ArrowDown";
import { customTheme } from "../../assets/customTheme";
function Hero(props) {
	const { title, subtitle, textAlign } = props;
	return (
		<Flex w='100%' minH='85vh'>
			<Flex
				flexDirection='column'
				w='100%'
				alignItems='center'
				justifyContent='center'
			>
				<Flex
					flexDirection='column'
					h='90%'
					alignItems='center'
					justifyContent='center'
				>
					<Heading as='h5' fontSize='5.75rem' my='0.78125rem'>
						{title}
					</Heading>
					<Heading
						my='0.78125rem'
						as='h2'
						fontSize='3rem'
						color={customTheme.text.white}
						textAlign={textAlign ? textAlign : "left"}
					>
						{subtitle}
					</Heading>
				</Flex>
				<ArrowDown />
			</Flex>
		</Flex>
	);
}

export default Hero;
