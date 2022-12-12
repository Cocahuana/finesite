import React from "react";
import SVGLogo from "../../../components/ui/SVG/SVGLogo";
import { Text } from "@chakra-ui/react";
import Button from "../../../components/ui/Button/Button";
function Packages() {
	return (
		<>
			<SVGLogo />
			<Text fontSize='4rem' mb='1.2rem'>
				Don’t know how much it’ll cost?
			</Text>
			<Text fontSize='2rem' w='37rem' textAlign='center'>
				See a list of templates that will guide you through our usual
				pricing.
			</Text>

			<Button>Select Package</Button>
			<Text fontSize='1.5rem'>
				Templates serve as guides to best represent the approximate
				price of a future project
			</Text>
			<Text color='#a2903e' fontSize='1rem'>
				Prices may vary between similar projects
			</Text>
		</>
	);
}

export default Packages;
