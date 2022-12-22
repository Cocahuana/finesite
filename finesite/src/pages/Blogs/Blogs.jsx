import { Flex, Box } from "@chakra-ui/react";
import Hero from "../../components/Hero/Hero";
function Blogs() {
	return (
		<Box>
			<Hero title='Titulo' subtitle='Subtitulo' />
			<Flex bg='green' w='full' h='100vh'>
				Textovich
			</Flex>
		</Box>
	);
}

export default Blogs;
