import "./flip.css";
import { useState } from "react";
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
			<div
				className={`flip-card ${
					flip !== true ? "front-flip" : "back-flip"
				}`}
			>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>{frontContent}</div>
					<div className='flip-card-back'>{backContent}</div>
				</div>
			</div>
		</button>
	);
}
