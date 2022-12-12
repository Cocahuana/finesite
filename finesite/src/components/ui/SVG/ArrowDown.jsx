import React from "react";

function ArrowDown(props) {
	return (
		<svg
			width={props.width ? props.width : "38px"}
			height={props.height ? props.height : "44px"}
			viewBox='0 0 38 44'
			fill={props.fill ? props.fill : "none"}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M16.6398 42.957C17.8676 44.1777 19.8616 44.1777 21.0895 42.957L36.8058 27.332C38.0337 26.1113 38.0337 24.1289 36.8058 22.9082C35.578 21.6875 33.584 21.6875 32.3561 22.9082L22.003 33.2109V3.25C22.003 1.52148 20.5983 0.125 18.8597 0.125C17.1211 0.125 15.7164 1.52148 15.7164 3.25V33.2012L5.36326 22.918C4.13541 21.6973 2.1414 21.6973 0.913557 22.918C-0.314285 24.1387 -0.314285 26.1211 0.913557 27.3418L16.6299 42.9668L16.6398 42.957Z'
				fill='white'
			/>
		</svg>
	);
}

export default ArrowDown;
