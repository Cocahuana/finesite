import React from "react";
import SVGLogo from "../../../components/ui/SVG/SVGLogo";
import { Text, Heading, Box } from "@chakra-ui/react";
import Button from "../../../components/ui/Button/Button";
function Packages() {
	return (
		<>
			<Box my=' 3.125rem'>
				<SVGLogo />
			</Box>
			<Heading
				as='h2'
				fontSize={{ base: "3rem", xl: "4rem" }}
				color='white'
				my='1.5625rem'
			>
				Don’t know how much it’ll cost?
			</Heading>
			<Text fontSize='2rem' w='37rem' textAlign='center' my='1.5625rem'>
				See a list of templates that will guide you through our usual
				pricing.
			</Text>

			<Button my='1.5625rem'>Select Package</Button>
			<Text
				fontSize='1.5rem'
				my='1.5625rem'
				textAlign={{ base: "center", xl: "left" }}
			>
				Templates serve as guides to best represent the approximate
				price of a future project.
			</Text>
			<Text color='#a2903e' fontSize='1rem'>
				Prices may vary between similar projects
			</Text>
		</>
	);
}

export default Packages;
