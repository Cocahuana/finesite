import { Flex } from "@chakra-ui/react";
function WrapperWithSVG(props) {
	const img = props.imgSide === "left" ? "left" : "right";
	const content =
		img === "left" ? (
			<Flex
				w='100%'
				flexDirection={{ base: "column-reverse", xl: "row" }}
			>
				<Flex
					minW='40%'
					alignItems='center'
					justifyContent='center'
					my={{ base: "3rem", xl: "0" }}
				>
					{props.img}
				</Flex>
				<Flex minW='60%' flexDirection='column'>
					{props.children}
				</Flex>
			</Flex>
		) : (
			<Flex w='100%' flexDirection={{ base: "column", xl: "row" }}>
				<Flex minW='45%' flexDirection='column'>
					{props.children}
				</Flex>
				<Flex
					minW='55%'
					alignItems='center'
					justifyContent='center'
					my={{ base: "3rem", xl: "0" }}
				>
					{props.img}
				</Flex>
			</Flex>
		);

	return <>{content}</>;
}

export default WrapperWithSVG;
