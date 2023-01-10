import { Heading, Text, Flex } from "@chakra-ui/react";
import { customTheme } from "../../../assets/customTheme";
function ContentCard(props) {
	const { ff } = customTheme;
	return (
		<Flex
			flexDirection='column'
			justifyContent='center'
			alignItems={{ base: "center", xl: "flex-start" }}
		>
			<Heading
				as='h2'
				fontSize={{ base: "1.25rem", xl: "2.5rem" }}
				color='#F7DB5F'
				mb='2rem'
				mt='3rem'
				textAlign={{ base: "center", xl: "left" }}
			>
				{props.title}
			</Heading>
			<Text
				lineHeight='200%'
				textAlign='justify'
				fontWeight='500'
				fontFamily={ff.base}
			>
				{props.text}
			</Text>
		</Flex>
	);
}

export default ContentCard;
