import { Flex, Box } from "@chakra-ui/react";
import Hero from "../../components/Hero/Hero";
function Contact() {
	return (
		<Box>
			<Hero
				title='Contact us!'
				subtitle='Questions, projects, applications, and more.'
			/>
			<Flex bg='violet' w='full' minH='100vh'>
				Textovich
			</Flex>
		</Box>
	);
}

export default Contact;
