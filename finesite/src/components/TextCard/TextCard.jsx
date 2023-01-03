import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 33.125rem;
`;
function TextCard(props) {
	const { children } = props;
	return <Container>{children}</Container>;
}

export default TextCard;
