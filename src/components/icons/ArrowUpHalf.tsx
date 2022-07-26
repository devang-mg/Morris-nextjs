import React from 'react'

function ArrowUpHalf({ up = false }) {
	return (
		<svg
			className={`duration-100 transition-all ${up && 'rotate-180 '}`}
			width="14"
			height="7"
			viewBox="0 0 14 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.1133 6.80078C13.0312 6.91016 12.9219 6.9375 12.8125 6.9375C12.7031 6.9375 12.5938 6.91016 12.5117 6.82812L7.125 1.85156L1.71094 6.80078C1.54688 6.96484 1.27344 6.96484 1.10938 6.77344C0.945312 6.60938 0.945312 6.33594 1.13672 6.17188L6.82422 0.921875C6.98828 0.757812 7.23438 0.757812 7.39844 0.921875L13.0859 6.17188C13.2773 6.36328 13.2773 6.63672 13.1133 6.80078Z"
				fill="white"
			/>
		</svg>
	)
}

export default ArrowUpHalf
