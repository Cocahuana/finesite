import React from "react";
import { Flex } from "@chakra-ui/react";
function CustomCards(props) {
	return (
		<>
			<Flex flexDirection='column'>{props.children}</Flex>
		</>
	);
}

export default CustomCards;
