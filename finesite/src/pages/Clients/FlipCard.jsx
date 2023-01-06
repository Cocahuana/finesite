import { useState } from "react";
import styled from "styled-components";

const FlipCardContainer = styled.div`
	background-color: transparent;
	width: 200px;
	height: 200px;
	perspective: 1000px;
	margin-left: 10px;
`;

const FlipCardInner = styled(FlipCardContainer)`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transform: ${(props) => (props.flip !== true ? "" : "rotateY(180deg)")};
`;

const FlipCardFront = styled(FlipCardContainer)`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
`;

const FlipCardBack = styled(FlipCardContainer)`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background-color: #2980b9;
	color: white;
	transform: rotateY(180deg);
`;

export default function FlipCard(props) {
	const { children } = props;
	const frontContent = children[0];
	const backContent = children[1];
	const [flip, setFlip] = useState(false);
	const flipCard = () => {
		setFlip(!flip);
	};

	return (
		<button onClick={flipCard}>
			<FlipCardContainer flip={flip}>
				<FlipCardInner flip={flip}>
					<FlipCardFront>{frontContent}</FlipCardFront>
					<FlipCardBack>{backContent}</FlipCardBack>
				</FlipCardInner>
			</FlipCardContainer>
		</button>
	);
}
