import { useState } from "react";
import styled from "styled-components";

const FlipCardContainer = styled.div`
	width: ${(props) => (props.w ? props.w : "300px")};
	height: ${(props) => (props.h ? props.h : "300px")};
	perspective: 1000px;
`;

const FlipCardInner = styled(FlipCardContainer)`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	transform: ${(props) => (props.flip !== true ? "" : "rotateY(180deg)")};
`;

const FlipCardFront = styled(FlipCardContainer)`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const FlipCardBack = styled(FlipCardContainer)`
	position: relative;
	width: 100%;
	height: 90%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background: linear-gradient(
		180deg,
		rgba(162, 144, 62, 0.42) 0%,
		rgba(0, 0, 0, 0.85) 81.55%
	);
	transform: rotateY(180deg);
	padding: 36px 28px;
`;

export default function FlipCard(props) {
	const { children, w, h } = props;
	/*
	 * @w and @h are important because its define background width and height properties when the card is flipped
	 */
	// we split children in two: one for each kind of view
	const frontContent = children[0];
	const backContent = children[1];
	const [flip, setFlip] = useState(false);
	const flipCard = () => {
		setFlip(!flip);
	};

	return (
		<FlipCardContainer w={w} h={h} flip={flip} onClick={flipCard}>
			<FlipCardInner flip={flip}>
				<FlipCardFront>{frontContent}</FlipCardFront>
				<FlipCardBack>{backContent}</FlipCardBack>
			</FlipCardInner>
		</FlipCardContainer>
	);
}
