import React from "react";

function SVGLogo(props) {
	return (
		<svg
			width={props.width ? props.width : "113"}
			height={props.height ? props.height : "79"}
			viewBox='0 0 113 79'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5 28.1909H108M28.1784 5V28.1909M5 51.575H108M83.8843 74V51.575M5 5H108V74H5V5Z'
				stroke='#F7DC5F'
				stroke-width='9'
				stroke-miterlimit='10'
			/>
		</svg>
	);
}

export default SVGLogo;
