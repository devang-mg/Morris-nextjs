import { RichText as RichTextRenderer } from 'prismic-reactjs'

import htmlSerializer from '@/lib/prismic/serializer'
import linkResolver from '@/lib/prismic/link-resolver'

type RichTextProps = { content: any; className?: string; maxWidth?: string }
const RichText = ({ content, className, maxWidth }: RichTextProps) => {
	return content ? (
		<div
			style={maxWidth ? { maxWidth: `${maxWidth}px` } : {}}
			className={`rich-text ${className ? className : ''}`}>
			<RichTextRenderer
				render={content}
				linkResolver={linkResolver}
				htmlSerializer={htmlSerializer}
			/>
		</div>
	) : null
}

export default RichText
