import { Flex } from "@chakra-ui/react";
function LittleWrapper(props) {
	return <Flex flexDirection='column'>{props.children}</Flex>;
}

export default LittleWrapper;
