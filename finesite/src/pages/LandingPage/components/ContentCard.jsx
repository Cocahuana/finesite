import { Heading, Text, Flex } from "@chakra-ui/react";
import { customTheme } from "../../../assets/customTheme";
function ContentCard(props) {
	const { ff } = customTheme;
	return (
		<Flex
			flexDirection='column'
			justifyContent='center'
			alignItems='flex-start'
			my={{ base: "32.5px", xl: "0px" }}
		>
			<Heading
				as='h2'
				fontSize={{ base: "1.25rem", xl: "2.5rem" }}
				color='#F7DB5F'
				mb={{ base: "1rem", xl: "2rem" }}
				mt={{ base: "1rem", xl: "3rem" }}
				textAlign={{ base: "left", xl: "left" }}
			>
				{props.title}
			</Heading>
			<Text
				lineHeight='200%'
				textAlign={{ base: "justify", xl: "justify" }}
				fontWeight='500'
				fontFamily={ff.base}
			>
				{props.text}
			</Text>
		</Flex>
	);
}

export default ContentCard;
