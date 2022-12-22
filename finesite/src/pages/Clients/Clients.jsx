import { Flex, Box } from "@chakra-ui/react";
import Hero from "../../components/Hero/Hero";
function Clients() {
	return (
		<Box>
			<Hero
				title='Our Work'
				subtitle='Get detailed information about our most recent projects and case studies.'
			/>
			<Flex bg='yellow' w='full' h='100vh'>
				Textovich
			</Flex>
		</Box>
	);
}

export default Clients;
