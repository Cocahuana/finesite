import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 31rem;
`;
function TextCard(props) {
	const { children } = props;
	return <Container>{children}</Container>;
}

export default TextCard;
