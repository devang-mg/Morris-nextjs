import React from 'react'

function StarIcon({ className = '' }) {
	return (
		<svg className={className} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.64062 1.24219L10.4453 4.87891L14.4375 5.45312C15.1484 5.5625 15.4492 6.4375 14.9297 6.95703L12.0312 9.74609L12.7148 13.7109C12.8242 14.4219 12.0859 14.9688 11.4297 14.6406L7.875 12.7812L4.29297 14.668C3.63672 14.9961 2.89844 14.4492 3.00781 13.7383L3.69141 9.77344L0.792969 6.95703C0.273438 6.4375 0.574219 5.5625 1.28516 5.45312L5.27734 4.87891L7.08203 1.24219C7.41016 0.585938 8.33984 0.613281 8.64062 1.24219Z"
				fill="#DBDBDB"
			/>
		</svg>
	)
}

export default StarIcon
