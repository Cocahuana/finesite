import React from "react";
import SVGLogo from "../../../components/ui/SVG/SVGLogo";
import { Text, Heading, Box } from "@chakra-ui/react";
import Button from "../../../components/ui/Button/Button";
function Packages() {
	return (
		<>
			<Box my={{ base: "0px", xl: "3.125rem" }}>
				<SVGLogo />
			</Box>
			<Heading
				as='h2'
				fontSize={{ base: "1.35rem", xl: "4rem" }}
				color='white'
				my='1.5625rem'
				textAlign={{ base: "left" }}
				fontWeight='900'
			>
				Don’t know how much it’ll cost?
			</Heading>
			<Text
				fontSize={{ base: "0.9rem", xl: "2rem" }}
				w={{ base: "278px", xl: "37rem" }}
				textAlign='center'
				my='1.5625rem'
			>
				See a list of templates that will guide you through our usual
				pricing.
			</Text>

			<Button my='1.5625rem'>Select Package</Button>
			<Text
				fontSize={{ base: "12px", xl: "1.5rem" }}
				my='1.5625rem'
				textAlign={{ base: "center", xl: "left" }}
			>
				Templates serve as guides to best represent the approximate
				price of a future project.
			</Text>
			<Text
				color='#a2903e'
				fontSize={{ base: "12px", xl: "1rem" }}
				mb={{ base: "23px" }}
			>
				Prices may vary between similar projects
			</Text>
		</>
	);
}

export default Packages;
