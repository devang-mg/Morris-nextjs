import { useMemo, Children, cloneElement } from 'react'

import Example from './Example'

export type SliceProps = {
	slice_type: string
	primary: { hero_theme?: { uid: string }; section_theme?: { uid: string } }
}

const slicePicker = (slice: SliceProps) => {
	const { slice_type } = slice || {}

	switch (slice_type) {
		// Hero Slices
		// ...

		// Body Slices
		case 'example_slice':
			return <Example />

		default:
			console.log(
				slice_type ? `Missing component for slice of type: ${slice_type}` : 'No slice defined!'
			)
			return null
	}
}

interface Props {
	slice: SliceProps
}
export const Slice = (props: Props) => {
	const { slice } = props || {}

	const foundSlice = useMemo(() => slicePicker(slice), [slice])

	return <>{foundSlice ? cloneElement(Children.only(foundSlice), { ...slice }, null) : null}</>
}

export const AllSlices = ({ page }) => {
	const { hero, body } = page || {}

	return (
		<>
			{/* Hero Slices */}
			{Array.isArray(hero) ? (
				<>
					{hero.map((slice, i) => {
						return <Slice slice={slice} key={`${slice?.slice_type}-${i}`} />
					})}
				</>
			) : null}

			{/* Body Slices */}
			{Array.isArray(body) ? (
				<>
					{body.map((slice, i) => {
						return <Slice slice={slice} key={`${slice?.slice_type}-${i}`} />
					})}
				</>
			) : null}
		</>
	)
}
