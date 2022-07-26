import React from 'react'

function Mic({ className = '' }) {
	return (
		<svg
			className={className}
			width="14"
			height="15"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.125 5.80859V1.625C13.125 1.40625 12.9336 0.75 12.25 0.75C12.0312 0.75 11.8398 0.832031 11.7031 0.96875L9.37891 2.82812C8.20312 3.75781 6.72656 4.25 5.25 4.25H1.75C0.765625 4.25 0 5.04297 0 6V8.625C0 9.60938 0.765625 10.375 1.75 10.375H1.80469C1.50391 12.5078 2.76172 14.3125 2.81641 14.3945C2.98047 14.6133 3.22656 14.75 3.5 14.75H5.25C5.57812 14.75 5.90625 14.5039 6.04297 14.1211C6.17969 13.7383 6.09766 13.3008 5.85156 13.0273C5.85156 13 4.75781 11.6602 5.05859 10.375H5.25C6.72656 10.375 8.20312 10.8945 9.35156 11.8242L11.7031 13.6836C11.8125 13.793 12.0586 13.875 12.25 13.875C12.9062 13.875 13.125 13.2734 13.125 13V8.84375C13.6445 8.51562 14 7.96875 14 7.3125C14 6.68359 13.6445 6.10938 13.125 5.80859ZM11.375 11.1953L10.4453 10.457C8.96875 9.28125 7.13672 8.625 5.25 8.625V6C7.13672 6 8.96875 5.37109 10.4453 4.19531L11.375 3.45703V11.1953Z"
				fill="#4A4A4A"
			/>
		</svg>
	)
}

export default Mic
