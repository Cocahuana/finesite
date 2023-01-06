import "./flip.css";
import { useState } from "react";
import styled from "styled-components";

const FlipCardContainer = styled.div`
	background-color: transparent;
	width: 200px;
	height: 200px;
	perspective: 1000px;
	margin-left: 10px;
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
			<FlipCardContainer
				className={`flip-card ${
					flip !== true ? "front-flip" : "back-flip"
				}`}
			>
				<div className='flip-card-inner'>
					<FlipCardFront>{frontContent}</FlipCardFront>
					<FlipCardBack>{backContent}</FlipCardBack>
				</div>
			</FlipCardContainer>
		</button>
		// 	<div
		// 	className={`flip-card ${
		// 		flip !== true ? "front-flip" : "back-flip"
		// 	}`}
		// >
		// 	<div className='flip-card-inner'>
		// 		<div className='flip-card-front'>{frontContent}</div>
		// 		<div className='flip-card-back'>{backContent}</div>
		// 	</div>
		// </div>
	);
}
